import Browser
import Html exposing (Html, button, div, text, p)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
main = Browser.sandbox { init = myStyle1, update = update, view = view }
update msg model = case msg of 
    False -> myStyle1 
    True -> myStyle2
myStyle1 = style "background" "red"
myStyle2 = style "background" "silver"
view model = p [ model ] [ div [ style "padding" "20px", align "center" ] [ button [ onClick True ] [ text "Off" ], button [ onClick False ] [ text "On" ]]]