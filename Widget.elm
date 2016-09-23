module Widget exposing (..)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

-- MODEL
type alias Model =
    { count : Int
    }

initialModel : Model
initialModel =
    { count = 0
    }

-- MESSAGES
type Msg
    = Increase
    | BigIncrease
    | Decrease
    | BigDecrease
    | Clear

-- VIEW
view: Model -> Html Msg
view model =
    div []
        [ div [] [ text (toString model.count) ]
        , button [ onClick Increase ] [ text "+" ]
        , button [ onClick BigIncrease ] [ text "++" ]
        , button [ onClick Decrease ] [ text "-" ]
        , button [ onClick BigDecrease ] [ text "--" ]
        , button [ onClick Clear ] [ text "0" ]
        ]

-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        Increase ->
            ( { model | count = model.count + 1 }, Cmd.none )
        BigIncrease ->
            ( { model | count = model.count + 10 }, Cmd.none )
        Decrease ->
            ( { model | count = model.count - 1 }, Cmd.none )
        BigDecrease ->
            ( { model | count = model.count - 10 }, Cmd.none )
        Clear ->
            ( { model | count = 0 }, Cmd.none )