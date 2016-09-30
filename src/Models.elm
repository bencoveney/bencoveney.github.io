module Models exposing (..)

import Projects.Models exposing (Project)

type alias Model =
    { projects : List Project
    }

initialModel : Model
initialModel =
    { projects = [ Project 1 "Elm" 1 ]
    }