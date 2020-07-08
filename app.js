$(window).on("load",function(){
    $("#mainContainer").find("*").hide().fadeIn(750);
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqN6r9BrxrrQV-MZlrgIJVNrng8M3X578&callback=initMap")
    })






var mylatitude;
var mylongitude;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
        mylatitude=pos.coords.latitude;
        mylongitude=pos.coords.longitude;
    })
}

function initMap(){
    var latlng={lat:mylatitude,lng:mylongitude};
    
    var calcLat;
    var calcLong;

    var options={
        zoom:4,
        center:latlng,
    }
    var map=new google.maps.Map(document.getElementById("googleMap"),options);

    var infoWindow=new google.maps.InfoWindow(
        {content:"Click to show weather at that location",position:latlng});
    infoWindow.open(map);


    map.addListener("click",function(mapsMouseEvent){
        calcLong=mapsMouseEvent.latLng.lng();
        calcLat=mapsMouseEvent.latLng.lat();
        
        
        const proxy="https://cors-anywhere.herokuapp.com/";


        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${calcLat},${calcLong}`,
            "method": "GET",
        
        }
        $.ajax(settings).done((res)=>res)
        .then(data=>data.currently)
        .then(current=>{
            console.log(current.apparentTemperature)
            $("#output").html(Mustache.render($("#template").html(),current))
        })






    });





    
}
    



























