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

new : Project
new =
    { id = 0
    , name = ""
    , stars = 1
    }