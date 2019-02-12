"use strict ";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Diego Sandoval
   Date:   2/12/19

*/
// This was not said in the book, but I wanted to have the map updatedlive, so I set up a function, excuted it, and then set an Interval too update it every second.
planisphereUpdate();
setInterval("planisphereUpdate()", 1000);

function planisphereUpdate() {
    // Sets up the variable of thisTime and give it the value of date.
    var thisTime = new Date();
    // This get the time at sets it to the variable to timeStr.
    var timeStr = thisTime.toLocaleString();
    // This applies the timeStr to an element by putting it into the HTML.
    document.getElementById('timeStamp').innerHTML = timeStr;
    // Gets the hour and month and apply it to their respective variables.
    var thisHour = thisTime.getHours();
    var thisMonth = thisTime.getMonth();
    // Calculates which map should be used.
    var mapNum = (2 * thisMonth + thisHour) % 24;
    // Takes the mapNum and applies it to the html so it can get the correct map and display it.
    var imgStr = `<img src='sd_sky${mapNum}.png' />`;
    document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);
};