module Update exposing (..)

import Messages exposing (Msg(..))
import Models exposing (Model)
import Projects.Update

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ProjectsMsg subMsg ->
            let
                ( updatedProjects, cmd ) = Projects.Update.update subMsg model.projects
            in
                ( { model | projects = updatedProjects }, Cmd.map ProjectsMsg cmd )