module Routing exposing (..)

import String
import Navigation
import UrlParser exposing (..)
import Projects.Models exposing (ProjectId)

type Route
    = ProjectsRoute
    | ProjectRoute ProjectId
    | AddRoute
    | NotFoundRoute

matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ format ProjectsRoute (s "")
        , format ProjectRoute (s "project" </> int)
        , format ProjectsRoute (s "projects")
        , format AddRoute (s "add")
        ]

hashParser : Navigation.Location -> Result String Route
hashParser location =
    location.hash
        |> String.dropLeft 1
        |> parse identity matchers

parser : Navigation.Parser (Result String Route)
parser =
    Navigation.makeParser hashParser

routeFromResult : Result String Route -> Route
routeFromResult result =
    case result of
        Ok route ->
            route

        Err string ->
            NotFoundRoute