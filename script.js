// These are our functions for loading up the landscapes and the objects 

function loadM() {
    document.getElementById('mercury').style.display = "block";
    document.getElementById('venus').style.display = "none"; 
    document.getElementById('earth').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('feather').style.display = "block";
}
function loadV() {
    document.getElementById('venus').style.display = "block";
    document.getElementById('mercury').style.display = "none";
    document.getElementById('earth').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('feather').style.display = "block";
}
function loadE() {
    document.getElementById('earth').style.display = "block";
    document.getElementById('mercury').style.display = "none";
    document.getElementById('venus').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('feather').style.display = "block";
    
}

// This is our code to set up our Canvas
document.addEventListener('DOMContentLoaded', (event) => { // This makes sure the canvas code happens after the HTML is fully loaded
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    const image = document.getElementById('brick');

    image.addEventListener("load", (e) => {
        ctx.drawImage(image, 10, 10);
    });
});

//This is our function for the input prompt to appear for the user to choose the height at which the objects fall from
function userInput() {
    var input = prompt("At what height would you like the objects to fall from?");

}
