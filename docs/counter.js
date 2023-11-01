let flyttet = 50;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    textSize(36);

    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '3px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '0px';
  
    document.getElementById("beholder").appendChild(canvas.elt);
}

function draw(){
    background(255, 179, 255);
    fill(255);
    textAlign(CENTER, CENTER);
    text('rystet: ' + str(flyttet), width / 2, height - 100);
    circle(width / 2, height / 2, flyttet);
}

function deviceMoved(){
    flyttet++;
    if (flyttet > 200){
        flyttet = 0;
    
        }
}
