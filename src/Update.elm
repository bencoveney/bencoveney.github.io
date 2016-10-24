module Update exposing (..)

import Messages exposing (Msg(..))
import Models exposing (Model)
import Projects.Update

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ProjectsMsg subMsg ->
            let
                ( updatedProjects, updatedNewProject, cmd ) = Projects.Update.update subMsg model.projects model.newProject
            in
                ( { model | projects = updatedProjects, newProject = updatedNewProject }, Cmd.map ProjectsMsg cmd )