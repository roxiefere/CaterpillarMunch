function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.highScore = 0;

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        //ate an apple
        if (d < 1) {
            this.total++;

            //keep track of high score and display score & highscore
            document.getElementById("score").innerHTML = "Score: " + this.total;
            document.getElementById("highScore").innerHTML = "High Score: " + localStorage.getItem("highScore") + " By: " + localStorage.getItem("name");


            return true;

        //didn't eat an apple
        } else {
            return false;
        }
    }

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.death = function () {

        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.scoring();
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.scoring = function() {
        var hs = 0;
        var highScoreName = localStorage.getItem("name");
        if(this.total <= localStorage.getItem("highScore")){
            alert("You Died!");
        }
        if (this.total > localStorage.getItem("highScore")) {
            localStorage.setItem("highScore", this.total);
            var name = prompt("You Died! Enter Your Name");
            localStorage.setItem("name",name);
        }
        var hs = localStorage.getItem("highScore");
        document.getElementById("highScore").innerHTML = "High Score: " + hs + " By: " + highScoreName;
    }

    this.update = function () {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function () {
        fill(128, 244, 66);
        for (var i = 0; i < this.tail.length; i++) {
            circle(this.tail[i].x, this.tail[i].y, scl);
        }
        circle(this.x, this.y, scl);

    }
}