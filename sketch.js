let x = 100;
let y = 100;
let z = 0;
let a = 220;
let b = 340;
let c = 500;
let goLeft = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220); // Set the background color
  
  // Make the color bars with rectangle shapes
  fill("#93006e"); noStroke(); rect(0, 0, 100, height);
  fill("#b50088"); noStroke(); rect(100, 0, 100, height);
  fill("#e200aa"); noStroke(); rect(200, 0, 100, height);
  fill("#ff04c0"); noStroke(); rect(300, 0, 100, height);
  fill("#ff49d1"); noStroke(); rect(400, 0, 100, height);
  fill("#ff78dd"); noStroke(); rect(500, 0, 100, height);
  
  // Fill color for "P" based on position X
  if (x > 50 && x <= 220) {
    fill("#9f70ff"); // Light purple for "P"
  } else if (x > 220 && x <= 340) {
    fill("#712aff"); // Purple for "P"
  } else if (x > 340 && x <= 500){
    fill("#4813b1"); // Dark purple for "P"
  } else if ( x > 500 && x <= 550){
    fill("#320e8b"); // Darkest purple for "P"
  } else {
    fill("#bf9fff"); // Lightest purple for "P"
  }
  textSize(300);
  textFont("IMPACT");
  textAlign(CENTER);
  text("P", x, y, z); // Make later "P" with position X
  
  // Fill color for "I" based on position A
  if (a > 220 && a <= 340) {
    fill("#712aff"); // Purple for "I"
  } else if (a > 340 && a <= 500){
    fill("#4813b1"); // Dark purple for "I"
  } else if ( a > 500 && a <= 550){
    fill("#320e8b"); // Darkest purple for "I"
  } else if (a > 50 && a <= 220) {
    fill("#8f70ff"); // Light purple for "I"
  }
  text("I", a, y, z); // Make letter "I" with position A
  
  // Fill color for "N" based on position B
  if (b > 340 && b <= 500){
    fill("#4813b1"); // Dark purple for "N"
  } else if ( b > 500 && b <= 550){
    fill("#320e8b"); // Darkest purple for "N"
  } else if (b > 50 && b <= 220) {
    fill("#8f70ff"); // Light purple for "N"
  } else if (b > 220 && b <= 340) {
    fill("#712aff"); // Purple for "N"
  }
  text("N", b, y, z); // Make letter "N" with position B
  
  //Fill color for "K" based on position C
  if ( c > 500 && c <= 550){
    fill("#320e8b"); // Darkest purple for "K"
  } else if (c > 50 && c <= 220) {
    fill("#8f70ff"); // Light purple for "K"
  } else if (c > 220 && c<= 340) {
    fill("#712aff"); // Purple for "K"
  } else if (c > 340 && c <= 500){
    fill("#4813b1"); // Dark purple for "K"
  }
  text("K", c, y, z); // Make letter "K" with position C
  
  // Move the letters from left to right
  if (goLeft === false) {
    x = x + 20;
    a = a + 20;
    b = b + 20;
    c = c + 20;
  } else {
    x = x - 20;
    a = a - 20;
    b = b - 20;
    c = c - 20;
  }
  
  // Bounce when the letters hit the screen
  if (x > 600 || a > 600 || b > 600 || c > 600) {
    goLeft = true;
  }
  
  if (x < 0 || a < 0 || b < 0 || c < 0) {
    goLeft = false;
  }
}