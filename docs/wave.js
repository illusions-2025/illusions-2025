
let gridPicker1;
let gridPicker2;
let drawGridCheckBox;
let flowerColourRadio;


//this function is called once at the start of a sketch
function setup() {


    //create a drawing surface on to the web page
    canvas = createCanvas(850,850);
    canvas.position(20,20);
    //create the checkbox for drawing 
    //checkerbox and dots.  if both on, then illusion is formed    
    drawGridCheckBox = createCheckbox("Draw Checkboard ",true);
    drawGridCheckBox.position(870,100);
    
    flowerColourRadio = createRadio();
    flowerColourRadio.option("red");
    flowerColourRadio.option("white");
    flowerColourRadio.option("illusion");
    flowerColourRadio.selected("red");
    flowerColourRadio.position(870,120);

    //create colour picker for grid
    gridPicker1 = createColorPicker("greenyellow");
    gridPicker1.position(870,20);
    gridPicker2 = createColorPicker("limegreen");
    gridPicker2.position(870,60);
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
    let x = 25;
    let y = 25;
    let colours = [gridPicker1.value(),gridPicker2.value()];
    let choice = 0;
    for (let i = 0;i<17;i++){
        for (let j = 0;j<17;j++){
            fill(colours[choice]);
            stroke(colours[choice]);
            rect(x,y,50,50);
            x += 50;
            choice = (choice+1)%2;
        }
        x=25;
        y+=50;
    }

}
function drawOneFlower(x,y,colour){
    push();
    translate(x,y);
    fill(colour);
    stroke(colour);
    ellipse(0,5,5,10);
    ellipse(0,-5,5,10);
    ellipse(5,0,10,5);
    ellipse(-5,0,10,5);
    pop();
}
function drawFlowers(firstColour, secondColour){
    let colours=[firstColour, secondColour];
    let sequence = [0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1];
    let choice = 0;
    x = 50;
    y = 50;
    for(i = 0;i < 16;i++){
        choice = i;
        for(j = 0;j<16;j++){
            curr = sequence[choice]
            drawOneFlower(x,y,colours[curr]);
            x+=50;
            choice = (choice + 1) % 16;
        }
        y+=50;
        x=50;        
    }


}

//this function is called once every 50 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    background(150);

    if(drawGridCheckBox.checked()){
        drawGrid();
    }
    colourString= flowerColourRadio.value();
    if(colourString == "illusion"){
        drawFlowers(color("white"),color("red"));
    }
    else{
        drawFlowers(color(colourString), color(colourString));

    }
    //noLoop();
}
