module Projects.Messages exposing (..)

import Http
import Projects.Models exposing (ProjectId, Project)

type Msg
    = FetchAllDone (List Project)
    | FetchAllFail Http.Error
    | ShowProjects
    | ShowProject ProjectId
    | ChangeStars ProjectId Int
    | SaveSuccess Project
    | SaveFail Http.Error