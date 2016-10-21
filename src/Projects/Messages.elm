module Projects.Messages exposing (..)

import Http
import Projects.Models exposing (..)

type Msg
    = FetchAllDone (List Project)
    | FetchAllFail Http.Error
    | ShowProjects
    | ShowProject ProjectId
    | ChangeStars ProjectId Int
    | SaveSuccess Project
    | SaveFail Http.Error
    | AddProject
    | AddSuccess Project
    | AddFail Http.Error
    | ChangeNewName ProjectName
    | ChangeNewStars ProjectStars