module Projects.Models exposing (..)

type alias ProjectId =
    Int

type alias ProjectName =
    String

type alias ProjectStars =
    Int

type alias Project =
    { id : ProjectId
    , name : ProjectName
    , stars : ProjectStars
    }

initialProject : Project
initialProject =
    { id = 0
    , name = "New Project"
    , stars = 1
    }
