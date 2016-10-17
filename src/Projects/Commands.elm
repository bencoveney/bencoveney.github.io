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

saveUrl : ProjectId -> String
saveUrl projectId =
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
            , url = saveUrl project.id
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