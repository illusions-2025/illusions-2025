
let drawGridCheckBox;
let drawDotsCheckBox;
//this function is called once at the start of a sketch
function setup() {


    //create a drawing surface on to the web page
    //this drawing surface is 1000 X 600
    canvas = createCanvas(900,900);
    canvas.position(20,20);
    //create the checkbox for drawing 
    //checkerbox and dots.  if both on, then illusion is formed    
    drawGridCheckBox = createCheckbox("Draw Checkboard ",true);
    drawGridCheckBox.position(920,20);
    drawDotsCheckBox = createCheckbox("Draw Dots ", true);
    drawDotsCheckBox.position(920,40);
    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER);
    ellipseMode(CENTER);

}

//if 
function drawGrid(){
    let x = 30;
    let y = 30;
    colour = 0;
    for (let i = 0;i<15;i++){
        for (let j = 0;j<15;j++){
            fill(255*colour);
            stroke(255*colour);
            rect(x,y,60,60);
            x += 60;
            colour = (colour+1)%2;
        }
        x=30;
        y+=60;
    }

}
function drawBottomDots(){
    let y = 120 - 11;
    let x = 7*60 + 3 + 8;
    colour = 1;
    for(let i = 0 ;i < 6;i++){
        fill (255*colour);
        stroke(255*colour);
        rect(x,y,16,16);
        rect(x+38,y,16,16);
        y+=60;
        colour = (colour+1)%2;
    }
}

function drawTopDots(){
    let y = 900 - 120 + 11;
    let x = 7*60 + 3 + 8;
    colour = 1;
    for(let i = 0 ;i < 6;i++){
        fill (255*colour);
        stroke(255*colour);
        rect(x,y,16,16);
        rect(x+38,y,16,16);
        y-=60;
        colour = (colour+1)%2;
    }    
}
function drawLeftDots(){
    let x = 900 - 120 + 11;
    let y = 7*60 + 3 + 8;
    colour = 1;
    for(let i = 0 ;i < 6;i++){
        fill (255*colour);
        stroke(255*colour);
        rect(x,y,16,16);
        rect(x,y+38,16,16);
        x-=60;
        colour = (colour+1)%2;
    }    
}

function drawLR(x,y,colour){
    i = x - 16 -3;
    j = y - 16 -3;
    fill(255*colour);
    stroke(255*colour);
    rect(i,j,16,16);
    i = x + 16 + 3;
    j = y + 16 + 3;
    rect(i,j,16,16);

}

function drawRL(x,y,colour){
    i = x + 16 +3;
    j = y - 16 -3;
    fill(255*colour);
    stroke(255*colour);
    rect(i,j,16,16);
    i = x - 16 - 3;
    j = y + 16 + 3;
    rect(i,j,16,16);
}

function drawRightDots(){
    let x = 120 - 11;
    let y = 7*60 + 3 + 8;
    colour = 1;
    for(let i = 0 ;i < 6;i++){
        fill (255*colour);
        stroke(255*colour);
        rect(x,y,16,16);
        rect(x,y+38,16,16);
        x+=60;
        colour = (colour+1)%2;
    }

}
function drawAllLRDots(){
    let numberToDraw = [6,5,5,4,3,1];
    let x = 8 * 60 + 30;
    let y = 6 * 60 + 30;
    let initColour = 1;
    for (let i = 0;i<6;i++){
        numBoxes = numberToDraw[i];
        colour = initColour;
        for(let j = 0;j <numBoxes;j++){
            drawLR(x,y,colour);
            colour = (colour+1)%2;
            y -= 60;
        }
        initColour = (initColour+1)%2;
        y = 6 * 60 + 30;
        x += 60;
    }

    x = 6 * 60 + 30;    
    y = 8 * 60 + 30;
    initColour = 1;
    for (let i = 0;i<6;i++){
        numBoxes = numberToDraw[i];
        colour = initColour;
        for(let j = 0;j <numBoxes;j++){
            drawLR(x,y,colour);
            colour = (colour+1)%2;
            y += 60;
        }
        initColour = (initColour+1)%2;
        y = 8 * 60 + 30;
        x -= 60;
    }

}

function drawAllRLDots(){
    let numberToDraw = [6,5,5,4,3,1];
    let x = 6 * 60 + 30;
    let y = 6 * 60 + 30;
    let initColour = 1;
    for (let i = 0;i<6;i++){
        numBoxes = numberToDraw[i];
        colour = initColour;
        for(let j = 0;j <numBoxes;j++){
            drawRL(x,y,colour);
            colour = (colour+1)%2;
            y -= 60;
        }
        initColour = (initColour+1)%2;
        y = 6 * 60 + 30;
        x -= 60;
    }

    x = 8 * 60 + 30;    
    y = 8 * 60 + 30;
    initColour = 1;
    for (let i = 0;i<6;i++){
        numBoxes = numberToDraw[i];
        colour = initColour;
        for(let j = 0;j <numBoxes;j++){
            drawRL(x,y,colour);
            colour = (colour+1)%2;
            y += 60;
        }
        initColour = (initColour+1)%2;
        y = 8 * 60 + 30;
        x += 60;
    }

}

function drawDots(){
    drawBottomDots();
    drawTopDots();
    drawLeftDots();
    drawRightDots();
    drawAllLRDots();
    drawAllRLDots();
}
//this function is called once every 60 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    background(150)
    if(drawGridCheckBox.checked()){
        drawGrid();
    }
    if(drawDotsCheckBox.checked()){
        drawDots();
    }
    //noLoop();
}
