module Projects.Update exposing (..)

import Navigation
import Projects.Messages exposing (Msg(..))
import Projects.Models exposing (Project)

update : Msg -> List Project -> ( List Project, Cmd Msg )
update message projects =
    case message of
        FetchAllDone newProjects ->
            ( newProjects, Cmd.none )

        FetchAllFail error ->
            ( projects, Cmd.none )

        ShowProjects ->
            ( projects, Navigation.newUrl "#projects" )

        ShowProject id ->
            ( projects, Navigation.newUrl ("#project/" ++ (toString id)) )
