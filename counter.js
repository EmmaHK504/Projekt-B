let flyttet = 0;
str


function deviceMoved(){
    flyttet++;
    if (flyttet > 200){
        flyttet = 0;
    
        }
}

function draw(){
    text('rystet: ' + str(rystet), 50, height-100);
}