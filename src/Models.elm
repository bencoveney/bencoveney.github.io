module Models exposing (..)

import Projects.Models exposing (Project, initialProject)
import Routing

type alias Model =
    { projects : List Project
    , newProject : Project
    , route : Routing.Route
    }

initialModel : Routing.Route -> Model
initialModel route =
    { projects = []
    , newProject = initialProject
    , route = route
    }
