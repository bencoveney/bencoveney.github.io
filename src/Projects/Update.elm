module Projects.Update exposing (..)

import Navigation
import Projects.Messages exposing (Msg(..))
import Projects.Commands exposing (save, add)
import Projects.Models exposing (..)

update : Msg -> List Project -> ( List Project, Cmd Msg )
update message projects =
    case message of
        FetchAllDone newProjects ->
            ( newProjects, Cmd.none )

        FetchAllFail error ->
            ( projects, Cmd.none )

        ShowProjects ->
            ( projects, Navigation.newUrl "#projects" )

        ShowProject id ->
            ( projects, Navigation.newUrl ("#project/" ++ (toString id)) )

        ChangeStars id howMuch ->
            ( projects, changeStarsCommands id howMuch projects |> Cmd.batch )

        SaveSuccess updatedProject ->
            ( updateProject updatedProject projects, Cmd.none )

        SaveFail error ->
            ( projects, Cmd.none )

        AddProject ->
            ( projects, add "new" 0 )

        AddSuccess updatedProject ->
            ( updateProject updatedProject projects, Cmd.none )

        AddFail error ->
            ( projects, Cmd.none )

        ChangeNewName name ->
            ( projects, Cmd.none )

        ChangeNewStars stars ->
            ( projects, Cmd.none )

changeStarsCommands : ProjectId -> Int -> List Project -> List (Cmd Msg)
changeStarsCommands projectId howMuch projects =
    let
        cmdForProject existingProject =
            if existingProject.id == projectId then
                save { existingProject | stars = existingProject.stars + howMuch }
            else
                Cmd.none
    in
        List.map cmdForProject projects

updateProject : Project -> List Project -> List Project
updateProject updatedProject projects =
    let
        select existingProject =
            if existingProject.id == updatedProject.id then
                updatedProject
            else
                existingProject
    in
        List.map select projects
