function setup() {
    createCanvas(800, 800); 
    background(220);
    
  }
  
  function draw() {
    
    stroke("blue")
    fill("red")
    if(mouseIsPressed)
    //console.log(mouseIsPressed)
    rect(mouseX,mouseY,10,25)
  }