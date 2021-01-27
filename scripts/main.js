// first imports
import getLocation from './location.js';
// helper functions


// event handlers

/**
 * Wait to get location and then display it.
 * Location should only be updated in response to a USER GESTURE
 */
async function locationHandler() {
    const locText = await getLocation();
    currentlat=locText.coords.latitude;
    document.getElementById("device-lat").innerHTML="This is about device-lat: " + currentlat.toFixed(6);
    currentlon = locText.coords.longitude;
    document.getElementById('device-long').innerHTML ="This is about device-long: " + currentlon.toFixed(6);
    locationsArray.forEach(function (value) {
        if (isInside(value.Latitude, value.Longitude)) {
            document.getElementById("locationAnswer").innerHTML = value.Name;
            error = false;
        }
    });
   
    if(error){
        document.getElementById("error-message").innerHTML = "you are out of bounds";
    }
    else{
        document.getElementById("error-message").innerHTML="";
    }
    }



function clearErrorText() {
    document.getElementById('error-message').innerHTML = '';
}


// declare main method................
function main() {
    console.log('Starting main method...');

    // get references to html elements
    const locationElement = document.getElementById('location');
    const errorElement = document.getElementById('error-message');

    // init error to empty string
    errorElement.innerHTML = '';

    locationElement.addEventListener('click', locationHandler);
    locationElement.addEventListener('touch', locationHandler);
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


// this is where it begins
window.addEventListener('load', main);


