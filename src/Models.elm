module Models exposing (..)

import Projects.Models exposing (Project)
import Routing

type alias Model =
    { projects : List Project
    , route : Routing.Route
    }

initialModel : Routing.Route -> Model
initialModel route =
    { projects = []
    , route = route
    }