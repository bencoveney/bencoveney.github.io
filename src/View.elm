module View exposing (..)

import Html exposing (Html, div, text)
import Html.App
import Messages exposing (Msg(..))
import Models exposing (Model)
import Projects.List
import Projects.Edit
import Projects.Add
import Projects.Models exposing (ProjectId)
import Routing exposing (Route(..))

view : Model -> Html Msg
view model =
    div []
        [ page model ]

page : Model -> Html Msg
page model =
    case model.route of
        ProjectsRoute ->
            Html.App.map ProjectsMsg (Projects.List.view model.projects)

        ProjectRoute id ->
            projectEditPage model id

        AddRoute ->
            Html.App.map ProjectsMsg (Projects.Add.view model.newProject)

        NotFoundRoute ->
            notFoundView

projectEditPage : Model -> ProjectId -> Html Msg
projectEditPage model projectId =
    let
        maybeProject =
            model.projects
                |> List.filter (\project -> project.id == projectId)
                |> List.head
    in
        case maybeProject of
            Just project ->
                Html.App.map ProjectsMsg (Projects.Edit.view project)

            Nothing ->
                notFoundView

notFoundView : Html Msg
notFoundView =
    div []
        [ text "Not Found"
        ]
