module Projects.List exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Projects.Messages exposing (..)
import Projects.Models exposing (Project)

view : List Project -> Html Msg
view projects =
    div []
        [ nav projects
        , list projects
        , addBtn
        ]

nav : List Project -> Html Msg
nav projects =
    div [ class "clearfix mb2 white bg-black" ]
        [ div [ class "left p2" ] [ text "Projects" ] ]

list : List Project -> Html Msg
list projects =
    div [ class "p2" ]
        [ table []
            [ thead []
                [ tr []
                    [ th [] [ text "Id" ]
                    , th [] [ text "Name" ]
                    , th [] [ text "Stars" ]
                    , th [] [ text "Actions" ]
                    ]
                ]
            , tbody [] (List.map projectRow projects)
            ]
        ]

projectRow : Project -> Html Msg
projectRow project =
    tr []
        [ td [] [ text (toString project.id) ]
        , td [] [ text project.name ]
        , td [] [ text (toString project.stars) ]
        , td []
            [ editBtn project, deleteBtn project ]
        ]

editBtn : Project -> Html Msg
editBtn project =
    button
        [ class "btn regular"
        , onClick (ShowProject project.id)
        ]
        [ i [ class "fa fa-pencil mr1" ] [], text "Edit" ]

deleteBtn : Project -> Html Msg
deleteBtn project =
    button
        [ class "btn regular"
        , onClick (ShowProject project.id)
        ]
        [ i [ class "fa fa-times-circle mr1" ] [], text "Delete" ]

addBtn : Html Msg
addBtn =
    button
        [ class "btn regular"
        , onClick (ShowAddForm)
        ]
        [ i [ class "fa fa-plus mr1" ] [], text "Add Project" ]
