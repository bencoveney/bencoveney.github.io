module Projects.Commands exposing (..)

import Http
import Json.Decode as Decode exposing ((:=))
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
