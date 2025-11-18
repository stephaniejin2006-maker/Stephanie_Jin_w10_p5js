let speed, angle, aSpeed, r, g, b, d;
let waveBall1, waveBall2;
let posX, posY;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  angle = 0;
  aSpeed = 5;

  posX = random(width);
  posY = random(height);

  waveBall1 = new doubleball(posX,posY);
  waveBall2 = new doubleball(posX,posY);

}

function draw() {
background(90,105,137,10);

// First object - doubleball
d = sinMap(30,40);
r = sinMap(20,255);
g = sinMap(100,150);
b = sinMap(50,50);


waveBall1.display(r,g,b,d);
waveBall1.update(4);
waveBall1.keepInCanvas();

// Second object - doubleball
d = sinMap(10,80);
r = sinMap(200,255);
g = sinMap(20,150);
b = sinMap(100,150);



waveBall2.display(r,g,b,d);
waveBall2.update(10);
waveBall2.keepInCanvas();

angle += aSpeed; 

}


function sinMap(start2,stop2){

  let myMap;

  myMap = map(sin(angle),-1,1,start2,stop2);

  return myMap;

}
