module Projects.Update exposing (..)

import Navigation
import Projects.Messages exposing (Msg(..))
import Projects.Commands exposing (save, add, delete)
import Projects.Models exposing (..)

update : Msg -> List Project -> Project -> ( List Project, Project, Cmd Msg )
update message projects newProject =
    case message of
        FetchAllDone newProjects ->
            ( newProjects, newProject, Cmd.none )

        FetchAllFail error ->
            ( projects, newProject, Cmd.none )

        ShowProjects ->
            ( projects, newProject, Navigation.newUrl "#projects" )

        ShowProject id ->
            ( projects, newProject, Navigation.newUrl ("#project/" ++ (toString id)) )

        ChangeStars id howMuch ->
            ( projects, newProject, changeStarsCommands id howMuch projects |> Cmd.batch )

        SaveSuccess updatedProject ->
            ( updateProject updatedProject projects, newProject, Cmd.none )

        SaveFail error ->
            ( projects, newProject, Cmd.none )

        ShowAddForm ->
            ( projects, newProject, Navigation.newUrl "#add" )

        AddProject ->
            ( projects, newProject, add newProject.name newProject.stars )

        AddSuccess newApiProject ->
            ( projects ++ [newApiProject], newProject, Navigation.newUrl "#projects" )

        AddFail error ->
            ( projects, newProject, Cmd.none )

        ChangeNewName name ->
            ( projects, { newProject | name = name }, Cmd.none )

        ChangeNewStars howMuch ->
            ( projects, { newProject | stars = newProject.stars + howMuch }, Cmd.none )

        DeleteProject id ->
            ( projects, newProject, delete id )

        DeleteSuccess id ->
            ( removeProject id projects, newProject, Cmd.none )

        DeleteFail error ->
            ( projects, newProject, Cmd.none )

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

removeProject : ProjectId -> List Project -> List Project
removeProject id list =
    let
        (passed, failed) = List.partition (\item -> item.id /= id) list
    in
        passed
