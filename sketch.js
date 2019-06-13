var s;
var scl = 20;

var food;

function setup() {
    createCanvas(500, 500);
    s = new Snake();
    frameRate(10);
    pickLocation();

    if(localStorage.getItem("highScore") == "null"){
        localStorage.setItem("highScore", 0);
    }
    if(localStorage.getItem("name") == "null"){
        localStorage.setItem("name", "None Yet");
    }


}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(249, 124, 119);

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();


    fill(229, 244, 66);
    circle(food.x, food.y, scl);
}





function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}