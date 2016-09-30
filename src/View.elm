module View exposing (..)

import Html exposing (Html, div, text)
import Html.App
import Messages exposing (Msg(..))
import Models exposing (Model)
import Projects.List

view : Model -> Html Msg
view model =
    div []
        [ page model ]

page : Model -> Html Msg
page model =
    Html.App.map ProjectsMsg (Projects.List.view model.projects)