module Projects.Commands exposing (..)

import Http
import Json.Decode as Decode exposing ((:=))
import Json.Encode as Encode
import Task
import Projects.Models exposing (ProjectId, Project)
import Projects.Messages exposing (..)

fetchAll : Cmd Msg
fetchAll =
    Http.get collectionDecoder fetchAllUrl
        |> Task.perform FetchAllFail FetchAllDone

fetchAllUrl : String
fetchAllUrl =
    "http://localhost:4000/projects"

collectionDecoder : Decode.Decoder (List Project)
collectionDecoder =
    Decode.list memberDecoder

memberDecoder : Decode.Decoder Project
memberDecoder =
    Decode.object3 Project
        ("id" := Decode.int)
        ("name" := Decode.string)
        ("stars" := Decode.int)

projectUrl : ProjectId -> String
projectUrl projectId =
    "http://localhost:4000/projects/" ++ (toString projectId)

saveTask : Project -> Task.Task Http.Error Project
saveTask project =
    let
        body =
            memberEncoded project
                |> Encode.encode 0
                |> Http.string

        config =
            { verb = "PATCH"
            , headers = [ ( "Content-Type", "application/json" ) ]
            , url = projectUrl project.id
            , body = body
            }
    in
        Http.send Http.defaultSettings config
            |> Http.fromJson memberDecoder

save : Project -> Cmd Msg
save project =
    saveTask project
        |> Task.perform SaveFail SaveSuccess

memberEncoded : Project -> Encode.Value
memberEncoded project =
    let
        list =
            [ ( "id", Encode.int project.id )
            , ( "name", Encode.string project.name )
            , ( "stars", Encode.int project.stars )
            ]
    in
        list
            |> Encode.object

addTask : String -> Int -> Task.Task Http.Error Project
addTask name stars =
    let
        body =
            (newProjectEncoded name stars)
                |> Encode.encode 0
                |> Http.string

        config =
            { verb = "POST"
            , headers = [ ( "Content-Type", "application/json" ) ]
            , url = fetchAllUrl
            , body = body
            }
    in
        Http.send Http.defaultSettings config
            |> Http.fromJson memberDecoder

add : String -> Int -> Cmd Msg
add name stars =
    addTask name stars
        |> Task.perform AddFail AddSuccess

newProjectEncoded : String -> Int -> Encode.Value
newProjectEncoded name stars =
    let
        list =
            [ ( "name", Encode.string name )
            , ( "stars", Encode.int stars )
            ]
    in
        list
            |> Encode.object

deleteTask : ProjectId -> Task.Task Http.Error ProjectId
deleteTask id =
    let
        body =
            Http.empty

        config =
            { verb = "DELETE"
            , headers = [ ( "Content-Type", "application/json" ) ]
            , url = projectUrl id
            , body = body
            }
    in
        Http.send Http.defaultSettings config
            |> Task.succeed id

delete : ProjectId -> Cmd Msg
delete id =
    deleteTask id
        |> Task.perform DeleteFail DeleteSuccess
