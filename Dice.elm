module Dice exposing (..)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Random

-- MODEL
type alias Model =
    Int

initialModel : Model
initialModel =
    0

-- MESSAGES
type Msg
    = Roll
    | OnResult Int

-- VIEW
view: Model -> Html Msg
view model =
    div []
        [ button [ onClick Roll ] [ text "Roll" ]
        , text (toString model)
        ]

-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        Roll ->
            ( model, Random.generate OnResult (Random.int 1 6) )
        OnResult result ->
            ( result, Cmd.none )