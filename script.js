// These are our global variables
var interval;
var brick;
var gravity = 0;

// The functions for loading our planets and setting each planet's gravity
function loadM() {
    document.getElementById('mercury').style.display = "block";
    document.getElementById('venus').style.display = "none"; 
    document.getElementById('earth').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('m_gravity').style.display = "block";
    document.getElementById('v_gravity').style.display = "none";
    document.getElementById('e_gravity').style.display = "none";
    gravity = 3.7;
}
function loadV() {
    document.getElementById('venus').style.display = "block";
    document.getElementById('mercury').style.display = "none";
    document.getElementById('earth').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('m_gravity').style.display = "none";
    document.getElementById('v_gravity').style.display = "block";
    document.getElementById('e_gravity').style.display = "none";
    gravity = 8.87;
}
function loadE() {
    document.getElementById('earth').style.display = "block";
    document.getElementById('mercury').style.display = "none";
    document.getElementById('venus').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('m_gravity').style.display = "none";
    document.getElementById('v_gravity').style.display = "none";
    document.getElementById('e_gravity').style.display = "block";
    gravity = 9.81;
}


// This is our code to set up our canvas and the animation
document.addEventListener('DOMContentLoaded', (event) =>{
    // This sets up the canvas for drawing
    const ctx = canvas.getContext("2d");
    const image = document.getElementById('brick');

    image.addEventListener("load", (e) => {
        ctx.drawImage(image, 10, 10)
    });
    // Some variables
    var vel = 0;
    var pos = 0;
    var interval;

    // Constant
    const brick = document.getElementById('brick');
    // Global function
    window.start = function() {
        vel = 0;
        time = 0;
        pos = 10;
        interval = setInterval(simulate, 1000 / 40 );
    }
    
    function simulate() {
        // This decides how much it should be moving by dependent on the gravity
        vel += gravity * (1/60);
        pos += vel;
        // This makes it move
        brick.style.top = pos + 'px';
        // This makes it stop once reaching the bottom of the landscape
        if (pos > 510 - brick.clientHeight) {
            clearInterval(interval);
        }
    }
});
