"use strict";

// POSSIBLE HELP

//
// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementsByClassName("toppings")) {
//         /* if present, the header is where you move the DIV from:*/
//         document.getElementsByClassName("toppings").onmousedown = dragMouseDown;
//     } else {
//         /* otherwise, move the DIV from anywhere inside the DIV:*/
//         elmnt.onmousedown = dragMouseDown;
//     }
//
//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }
//
//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }
//
//     function closeDragElement() {
//         /* stop moving when mouse button is released:*/
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
}

// END OF POSSIBLE HELP




//
// $( function() {
//     $( "#draggable" ).draggable();
// } );






// excercise 2

//
// function makeTitle(str) {
//     return str
//         .split(' ')
//         .map(function(word) {
//             return word[0].toUpperCase() + word.substr(1);
//         })
//         .join(' ');
// }
// console.log( makeTitle("epstein didnt kill himself"));
//
//
//
//
//
//
// const missingNum = (arr) => {
//     for (let i = 1; i <= arr.length + 1; i++) {
//         if (arr.indexOf(i) === -1) return i;
//     }
// }
//
// console.log(missingNum("1,2,4,5,6,8"));
//
//
// const button = document.getElementById("submit");
// console.log(button);
//
// function volume_sphere(){
//     // e.preventDefault();
//     let volume;
//     let radius = document.getElementById('radius').value;
//     radius = Math.abs(radius);
//     volume = (4/3) * Math.PI * Math.pow(radius, 3);
//     volume = volume.toFixed(4);
//     document.getElementById('volume').value = volume;
//     return false;
//
// }
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// button.addEventListener('click', volume_sphere,true);
//

//
// function getDay(day) {
//     let d = new Date(day);
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return days[d.getDay()]
// }
// console.log(getDay("05/19/2020"));
//
//
// console.log("old stuff above");
//
//
// // New stuff
//
// console.log("How many days have passed since current date: ");
//
// function days_passed(dt) {
//     let current = new Date(dt.getTime());
//     let previous = new Date(dt.getFullYear(), 0, 1);
//
//     return Math.ceil((current - previous + 1) / 86400000);
// }
//
// console.log(days_passed(new Date(2019, 12, 6)));
//
//
// // 2nd new stuff
//

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