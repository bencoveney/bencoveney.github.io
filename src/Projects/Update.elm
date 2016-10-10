module Projects.Update exposing (..)

import Projects.Messages exposing (Msg(..))
import Projects.Models exposing (Project)

update : Msg -> List Project -> ( List Project, Cmd Msg )
update message projects =
    case message of
        FetchAllDone newProjects ->
            ( newProjects, Cmd.none )

        FetchAllFail error ->
            ( projects, Cmd.none )
