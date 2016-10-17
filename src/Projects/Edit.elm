module Projects.Edit exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, value, href)
import Html.Events exposing (onClick)
import Projects.Models exposing (..)
import Projects.Messages exposing (..)

view : Project -> Html Msg
view model =
    div []
        [ nav model
        , form model
        ]

nav : Project -> Html Msg
nav model =
    div [ class "clearfix mb2 white bg-black p1" ]
        [ listBtn ]

form : Project -> Html Msg
form project =
    div [ class "m3" ]
        [ h1 [] [ text project.name ]
        , formStars project
        ]

formStars : Project -> Html Msg
formStars project =
    div
        [ class "clearfix py1"
        ]
        [ div [ class "col col-5" ] [ text "Stars" ]
        , div [ class "col col-7" ]
            [ span [ class "h2 bold"] [ text (toString project.stars) ]
            , btnLevelDecrease project
            , btnLevelIncrease project
            ]
        ]

btnLevelDecrease : Project -> Html Msg
btnLevelDecrease project =
    a [ class "btn ml1 h1", onClick (ChangeStars project.id -1) ]
        [ i [ class "fa fa-minus circle" ] [] ]

btnLevelIncrease : Project -> Html Msg
btnLevelIncrease project =
    a [ class "btn ml1 h1", onClick (ChangeStars project.id 1) ]
        [ i [ class "fa fa-plus circle" ] [] ]

listBtn : Html Msg
listBtn =
    button
        [ class "btn regular"
        , onClick ShowProjects
        ]
        [ i [ class "fa fa-chevron-left mr1" ] [], text "List" ]
