module Projects.Models exposing (..)

type alias ProjectId =
    Int

type alias Project =
    { id : ProjectId
    , name : String
    , stars : Int
    }

new : Project
new =
    { id = 0
    , name = ""
    , stars = 1
    }