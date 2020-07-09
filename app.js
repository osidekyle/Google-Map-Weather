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
        
        
        

        
        var settings = {
        "async": true,
	    "crossDomain": true,
	    "url": `http://api.openweathermap.org/data/2.5/weather?lat=${calcLat}&lon=${calcLong}&units=imperial&appid=41b2a550cdd10b9407d8689a269e8ab8`,
	    "method": "GET",
	    
        }
        
        
        $.ajax(settings).done((res)=>res)
        .then(main=>{
            $("#output").html(Mustache.render($("#template").html(),main))})
            

        
        })


        









    
}
    



























