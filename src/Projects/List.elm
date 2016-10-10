module Projects.List exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Projects.Messages exposing (..)
import Projects.Models exposing (Project)

view : List Project -> Html Msg
view projects =
    div []
        [ nav projects
        , list projects
        ]

nav : List Project -> Html Msg
nav projects =
    div [ class "clearfix mb2 white bg-black" ]
        [ div [ class "left p2" ] [ text "Players" ] ]

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
        , td [] []
        ]