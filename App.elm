module App exposing (..)

import Html exposing (Html, br, button, div, text)
import Html.Events exposing (onClick)
import Html.App

-- MODEL
type alias Model =
    Int

init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )

-- MESSAGES
type Msg
    = Increment Int
    | Clear

-- VIEW
view : Model -> Html Msg
view model =
    div []
        [ button [ onClick (Increment 1) ] [ text "+" ]
        , button [ onClick (Clear) ] [ text "Clear" ]
        , br [] []
        , text (toString model)
        ]

-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment amount ->
            ( model + amount, Cmd.none )
        Clear ->
            ( 0, Cmd.none )

-- SUBSCRIPTIONS
subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

-- MAIN
main : Program Never
main =
    Html.App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }