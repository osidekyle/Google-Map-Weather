$(document).ready(function(){
    $("#mainContainer").find("*").hide().fadeIn(750);
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqN6r9BrxrrQV-MZlrgIJVNrng8M3X578&callback=initMap");
});

var latitude;
var longitude;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
        latitude=pos.coords.latitude;
        longitude=pos.coords.longitude;
    })
}

function initMap(){ 
    var options={
        zoom:4,
        center:{lat:latitude,lng:longitude}
    }
    var map=new google.maps.Map(document.getElementById("googleMap"),options);
    }

    



























