// These are our functions for loading up the landscapes and the objects 

var vel_m = 0.3422;
var vel_v = 4.829;
var vel_e = 36.995;
var cur_vel = 0;
var interval;
var brick;
var gravity = 0;
function loadM() {
    document.getElementById('mercury').style.display = "block";
    document.getElementById('venus').style.display = "none"; 
    document.getElementById('earth').style.display = "none";
    document.getElementById('brick').style.display = "block";
    document.getElementById('m_gravity').style.display = "block";
    document.getElementById('v_gravity').style.display = "none";
    document.getElementById('e_gravity').style.display = "none";
    cur_vel = vel_m;
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
    cur_vel = vel_v;
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
    cur_vel = vel_e;
    gravity = 9.81;
}


// This is our code to set up our Canvas and the animation
document.addEventListener('DOMContentLoaded', (event) =>{
    const ctx = canvas.getContext("2d");
    const image = document.getElementById('brick');

    image.addEventListener("load", (e) => {
        ctx.drawImage(image, 10, 10)
    });

    var vel = 0;
    var pos = 0;
    var interval;
    const brick = document.getElementById('brick');

    window.start = function() {
        vel = 0;
        time = 0;
        pos = 10;
        
        interval = setInterval(simulate, 1000 / 40 );
    }
    
    function simulate() {
        vel += gravity * (1/60);
        pos += vel;
    
        brick.style.top = pos + 'px';
    
        if (pos > 510 - brick.clientHeight) {
            clearInterval(interval);
        }
    }
});
