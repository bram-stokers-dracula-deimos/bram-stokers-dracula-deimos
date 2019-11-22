"use strict";

//
// function dragElement(elementById) {
//
// }
//
// function init() {
//     var toppings = "#pineapple,#pepperoni";
//     var dragItem = document.getElementById('#pineapple');
//                    // document.querySelector("#pinapple");
//
//
//     var container = document.querySelector("#container");
//
//     var active = false;
//     var currentX;
//     var currentY;
//     var initialX;
//     var initialY;
//     var xOffset = 0;
//     var yOffset = 0;
//
//
//     dragElement(document.getElementById("#pineapple"));
//
//     container.addEventListener("mousedown", dragStart, false);
//     container.addEventListener("mouseup", dragEnd, false);
//     container.addEventListener("mousemove", drag, false);
//
//     function dragStart(e) {
//         if (e.type === "touchstart") {
//             initialX = e.touches[0].clientX - xOffset;
//             initialY = e.touches[0].clientY - yOffset;
//         } else {
//             initialX = e.clientX - xOffset;
//             initialY = e.clientY - yOffset;
//         }
//
//         if (e.target === dragItem) {
//             active = true;
//         }
//     }
//
//     function dragEnd(e) {
//         initialX = currentX;
//         initialY = currentY;
//
//         active = false;
//     }
//
//     function drag(e) {
//         if (active) {
//
//             e.preventDefault();
//
//             if (e.type === "touchmove") {
//                 currentX = e.touches[0].clientX - initialX;
//                 currentY = e.touches[0].clientY - initialY;
//             } else {
//                 currentX = e.clientX - initialX;
//                 currentY = e.clientY - initialY;
//             }
//
//             xOffset = currentX;
//             yOffset = currentY;
//
//             setTranslate(currentX, currentY, dragItem);
//         }
//     }
//
//     function setTranslate(xPos, yPos, el) {
//         el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
//     }
// }
//
//
//
//
// function startDrag(e) {
//     // determine event object
//     if (!e) {
//         var e = window.event;
//     }
//
//     // IE uses srcElement, others use target
//     var targ = e.target ? e.target : e.srcElement;
//
//     if (targ.className !== 'pineapple') {return};
//     // calculate event X, Y coordinates
//     let offsetX;
//     offsetX = e.clientX;
//     let offsetY;
//     offsetY = e.clientY;
//
//     // assign default values for top and left properties
//     if(!targ.style.left) { targ.style.left='0px'};
//     if (!targ.style.top) { targ.style.top='0px'};
//
//     // calculate integer values for top and left
//     // properties
//     let coordX;
//     coordX = parseInt(targ.style.left);
//     let coordY;
//     coordY = parseInt(targ.style.top);
//     let drag;
//     drag = true;
//
//     // move div element
//     document.onmousemove=dragDiv;
//
// }
// function dragDiv(e) {
//     if (!drag) {return};
//     if (!e) { var e= window.event};
//     var targ=e.target?e.target:e.srcElement;
//     // move div element
//     targ.style.left=coordX+e.clientX-offsetX+'px';
//     targ.style.top=coordY+e.clientY-offsetY+'px';
//     return false;
// }
// function stopDrag() {
//     let drag;
//     drag=false;
// }
// window.onload = function() {
//     document.onmousedown = startDrag;
//     document.onmouseup = stopDrag;
// };




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

// button.addEventListener('click', volume_sphere,true);
//


function getDay(day) {
    let d = new Date(day);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d.getDay()]
}
console.log(getDay("05/19/2020"));