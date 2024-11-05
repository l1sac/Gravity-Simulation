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
document.addEventListener('DOMContentLoaded', (event) => { 
    const ctx = canvas.getContext("2d");
    const image = document.getElementById('brick');

    image.addEventListener("load", (e) => {
        ctx.drawImage(image, 10, 10);
    });
});

// This is the variable for our equation

var height = document.getElementById('inputHeight');
