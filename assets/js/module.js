'use strict';
export const weekDayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']; 


/**
 * 
 * @param {number} dataUnix Unix data in seconds
 * @param {number} timezone Timezome shift form utc in seconds
 * @returns {string} Data String. formate: "Sunday 12 , May"
 */
export const getDate=function(dataUnix,timezone){
    const date=new Date((dataUnix+timezone)*1000);
    const weekDayName = weekDayNames[date.getUTCDay()]; // Use getUTCDay() instead of getUTCDate()
    const monthName = monthNames[date.getUTCMonth()]; 

    return `${weekDayName} ${date.getUTCDate()} , ${monthName}`; 
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds 
 * @param {number} timezone Timezone shift from utc in seconds
 * @returns {string} Time string.formate : "HH:MM AM/PM"
 */
export const getTime=function(timeUnix,timezone){
    const date=new Date((timeUnix+timezone)*1000);
    const hours=date.getUTCHours();
    const minutes=date.getUTCMinutes();
    const period=hours>=12?'PM':'AM';
    return `${hours%12|| 12}:${minutes} ${period}`;
}



/**
 * 
 * @param {number} timeUnix Unix date in seconds 
 * @param {number} timezone Timezone shift from utc in seconds
 * @returns {string} Time string.formate : "HH AM/PM"
 */
export const getHours=function(timeUnix,timezone){
    const date=new Date((timeUnix+timezone)*1000);
    const hours=date.getUTCHours();
    const period=hours>=12?'PM':'AM';
    return `${hours%12|| 12} ${period}`;
}


/**
 * 
 * @param {number} mps  Metter per seconds
 * @returns {number} kilemoter per hours
 */
export const mps_to_kmh=mps=> {
    const mph=mps*3600;
    return mph/1000;

}


export const aqiTest={
    1:{
        level:"Good",
        message:"Air quality is satisfactory, and air pollution poses little or no risk."
    },
    2:{
        level:"Fair",
        massage:"Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
    },
    3:{
        level:"Moderate",
        massage:"Members of sensitive groups may experience health effects. The general public is less likely to be affected."
    },
    4:{
        level:"Poor",
        massage:"Everyone may begin to experience health effects, members of sensitive groups may experience more serious health effects."
    },
    5:{
        level:"Very Poor",
        massage:"Health warnings of emergency conditions. The entire population is more likely to be affected."
    }


}