"use strict";
var item = null;

// var toppings= "#pineapple";
//


// SELECTED ITEM



$( function() {
    $( "#pineapple" ).draggable();
} );





document.querySelectorAll("#pineapple").forEach(function (element) {
    element.addEventListener("mousedown", selectItem)
});
function selectItem(event) {
    item = event.target;


// UNSELECT ITEM

document.addEventListener("mouseup", function () {
    item = null
});

// MOVE STUFF

document.addEventListener("mousemove", function (event) {
    if (item) {
        item.style.left = event.clientX + "50px",
        item.style.top  = event.clientY + "50px"
    }
});

}

//
// excercise 2



// function missingLetter(array) {
//     var min = array[0].charCodeAt(0);
//     var max = array[array.length-1].charCodeAt(0);
//     var range = [min, max];
//     for (var i = range[0]; i <= range[1]; i++){
//         var letter = String.fromCharCode(i);
//         if (!array.includes(letter)){
//             return letter
//         }
//     }
// }
// missingLetter();
// console.log(missingLetter("mary had a little"));

// -------------------

function makeTitle(str) {
    return str
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}
console.log( makeTitle("epstein didnt kill himself"));






const missingNum = (arr) => {
    for (let i = 1; i <= arr.length + 1; i++) {
        if (arr.indexOf(i) === -1) return i;
    }
}

console.log(missingNum("1,2,4,5,6,8"));

afasdfasdf