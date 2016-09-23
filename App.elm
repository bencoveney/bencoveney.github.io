module App exposing (..)

import Html exposing (Html, hr, div, text)
import Html.App
import Dice
import Widget
import Mouse
import Keyboard

-- MODEL
type alias AppModel =
    { widgetModel : Widget.Model
    , counter: Int
    , diceModel : Dice.Model
    }

initialModel : AppModel
initialModel =
    { widgetModel = Widget.initialModel
    , counter = 0
    , diceModel = Dice.initialModel
    }

init : ( AppModel, Cmd Msg )
init =
    ( initialModel, Cmd.none )

-- MESSAGES
type Msg
    = WidgetMsg Widget.Msg
    | MouseMsg Mouse.Position
    | KeyMsg Keyboard.KeyCode
    | DiceMsg Dice.Msg

-- VIEW
view : AppModel -> Html Msg
view model =
    div []
        [ Html.App.map WidgetMsg (Widget.view model.widgetModel)
        , hr [] []
        , div [] [ text (toString model.counter) ]
        , hr [] []
        , text "Dice"
        , Html.App.map DiceMsg (Dice.view model.diceModel)
        ]

-- UPDATE
update : Msg -> AppModel -> ( AppModel, Cmd Msg )
update message model =
    case message of
        WidgetMsg subMsg ->
            let
                ( updatedWidgetModel, widgetCmd ) = Widget.update subMsg model.widgetModel
            in
                ( { model | widgetModel = updatedWidgetModel }, Cmd.map WidgetMsg widgetCmd )
        MouseMsg position ->
            ( { model | counter = model.counter + 1 }, Cmd.none )
        KeyMsg code ->
            ( { model | counter = model.counter + 2 }, Cmd.none )
        DiceMsg subMsg ->
            let
                ( updatedDiceModel, diceCmd ) = Dice.update subMsg model.diceModel
            in
                ( { model | diceModel = updatedDiceModel }, Cmd.map DiceMsg diceCmd )

-- SUBSCRIPTIONS
subscriptions : AppModel -> Sub Msg
subscriptions model =
    Sub.batch
        [ Mouse.clicks MouseMsg
        , Keyboard.presses KeyMsg
        ]

-- MAIN
main : Program Never
main =
    Html.App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }