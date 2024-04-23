'use strict';

const api_key = "1729148d78c07a885b661d4243cef745";

/**
 * 
 * @param {string} URL  API url
 * @param {Function} callback  callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
    },

    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`;
    },


    /**
     * 
     * @param {string} query search query e.g:"Dhaka","Bangladesh"
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
    }
}
