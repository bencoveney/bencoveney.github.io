module App exposing (..)

import Html exposing (Html, hr, br, button, div, text)
import Html.Events exposing (onClick)
import Html.App
import Widget
import Mouse
import Keyboard

-- MODEL
type alias AppModel =
    { widgetModel : Widget.Model
    , counter: Int
    }

initialModel : AppModel
initialModel =
    { widgetModel = Widget.initialModel
    , counter = 0
    }

init : ( AppModel, Cmd Msg )
init =
    ( initialModel, Cmd.none )

-- MESSAGES
type Msg
    = WidgetMsg Widget.Msg
    | MouseMsg Mouse.Position
    | KeyMsg Keyboard.KeyCode

-- VIEW
view : AppModel -> Html Msg
view model =
    div []
        [ Html.App.map WidgetMsg (Widget.view model.widgetModel)
        , hr [] []
        , div [] [ text (toString model.counter) ]
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