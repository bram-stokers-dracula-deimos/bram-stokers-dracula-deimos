"use strict";



function getDay(day) {
    let d = new Date(day);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d.getDay()]
}
console.log(getDay("05/19/2020"));




// New stuff

console.log("How many days have passed since beginning of the year: ");

function days_passed(dt) {
    let current = new Date(dt.getTime());
    let previous = new Date(dt.getFullYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
}

console.log(days_passed(new Date(2019, 5, 19)));


// 2nd new stuff
$( function() {
    $( "#star-five" ).draggable();
    $( "#star1" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
} );

const button = document.getElementById("submit");
console.log(button);

function volume_sphere(){
    // e.preventDefault();
    let volume;
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;

}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

button.addEventListener('click', volume_sphere,true);
