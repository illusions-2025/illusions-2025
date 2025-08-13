
let frameRateSlider;

let flowerColour = 255;
let numFrames = 20;
let flowerDirection = -1;
let frameCount = 0;

//this function is called once at the start of a sketch
function setup() {
    //create a drawing surface on to the web page
    //this drawing surface is 1000 X 600
    canvas = createCanvas(600,300);
    canvas.position(20,20);
    label = createSpan('FrameRate:');
    label.position(625, 20);

    //make a slider to control the frameRate
    frameRateSlider = createSlider(1, 60, 60);
    frameRateSlider.position(625,50);
    frameRateSlider.size(80);


    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER);
    ellipseMode(CENTER);
    change = 255/numFrames;

}

function drawFlower(x,y,colour,direction){
    let j = 0;
    let rotation = 0;
    for(let i = 0;i<12;i++){
        push();   
        fill(colour);
        // Translate origin to middle of canvas
        translate(x, y);
        rotate(j);
        j=j+(2.0/12)*PI;
        ellipse(0,-100,35,50);
        strokeWeight(3);
        if(direction == 1){
            stroke(colour);
        }
        else{
            stroke(255-colour);
        }
        arc(0,-100,35,50,PI/2,3*PI/2);
        if(direction == 1){
            stroke(255-colour);
        }
        else{
            stroke(colour);
        }
        arc(0,-100,35,50,3*PI/2,PI/2);
        // Restore coordinate system and color
        pop();
    }


}

//this function is called once every 60 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    background(150)
    drawFlower(150,150,flowerColour,flowerDirection);
    drawFlower(450,150,flowerColour,flowerDirection);
    flowerColour += flowerDirection * change;
    frameCount += 1;
    if(frameCount == numFrames){
        flowerDirection*=-1;
        frameCount = 0;
    }
    frameRate(frameRateSlider.value());
    //noLoop();
}
