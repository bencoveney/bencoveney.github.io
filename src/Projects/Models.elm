module Projects.Models exposing (..)

type alias ProjectId =
    Int

type alias Project =
    { id : ProjectId
    , name : String
    , level : Int
    }

new : Project
new =
    { id = 0
    , name = ""
    , level = 1
    }