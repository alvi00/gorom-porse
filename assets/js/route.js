'use strict';

import {updateWeather,error404} from "./app.js";

const defaultLocation="#/weather?lat=23.7644025&lon=90.389015"; //Dhaka Bangladesh

const currentLocation=function(){
    window.navigator.geolocation.getCurrentPosition(res=>{
        const{
            latitude,longitude
        }=res.coords;

        updateWeather(`lat=${latitude}`,`lon=${longitude}`);
    }, err=> {
        window.location.hash=defaultLocation;
    });
}

/**
 * 
 * @param {string} query Seached query
 */
const searchedLocation=query=> updateWeather(...query.split("&"));
//updateWeather("lat=23.8041","lon=-90.4152")

const routes=new Map([
    ["/current-location",currentLocation],
    ["/weather",searchedLocation],

]);

const checkHash=function(){
    const requestURL=window.location.hash.slice(1);
    const [route,query] =requestURL.includes?requestURL.split("?") : [requestURL];
    
    routes.get(route)? routes.get(route)(query):error404();
}


window.addEventListener("hashchange",checkHash);

window.addEventListener("load",function(){
    if(!window.location.hash){
        window.location.hash="#/current-location";
    }else{
        checkHash();
    }
});