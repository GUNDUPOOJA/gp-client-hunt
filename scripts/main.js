
import locationsArray from '../init-locations.js';

// for location element we assigned location id.
let locationElement = document.getElementById("location");

window.addEventListener('load', main);
locationElement.addEventListener('click', locationHandler);
locationElement.addEventListener('touch', locationHandler);

function main() {
    console.log('Page is fully loaded');
}

// initializing the current position lat and lon and error to true
let currentlat;
let currentlon;
let error = true;

// collects current location
async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

// gets current locations and compares the locations from init-locations.js

async function locationHandler() {
    let locText = await getLocation();
    currentlat = locText.coords.latitude;
    document.getElementById("device-lat").innerHTML = "device-lat: " + currentlat.toFixed(6);
    currentlon = locText.coords.longitude;
    document.getElementById("device-long").innerHTML = "device-long: " + currentlon.toFixed(6);

    locationsArray.forEach(function (value) {
        if (isInside(value.Latitude, value.Longitude)) {
            document.getElementById("locationAnswer").innerHTML = value.Name;
            error = false;
        }
    });

    function distance(lat1,lon1,lat2,lon2){
        var R = 6371; // Earth's radius in Km
        return Math.acos(Math.sin(lat1)*Math.sin(lat2) + 
                        Math.cos(lat1)*Math.cos(lat2) *
                        Math.cos(lon2-lon1)) * R;
      }
      
      
      if (distance(user.lat, user.lon, post.lat, post.lon) <= desiredRadiusInKm){
        // return true;
      } else {
        // return false;
      }
    }