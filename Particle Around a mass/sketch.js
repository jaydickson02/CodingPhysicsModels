
var planetArray = [];

function setup() {
    createCanvas(4000, 2000);

    //Create the star and planets
    star = new physicsObject(10000, 100, {x: 2000, y: 1000}, 0);


    //Planet Generator
    xCount = 2300;
    sCount = 4;

    for (var i = 0; i < 1; i++){
        planetArray[i] = new physicsObject(0.00001, 30, {x: xCount, y: 1000}, sCount)
        xCount += 400;
        sCount -= 0.5;
    }
}

function draw() {
    background(255);
    fill('yellow');
    star.draw();
    fill('255');

   for(var i = 0; i < planetArray.length; i++){
       planetArray[i].draw();
       star.attract(planetArray[i]);

       for (var j = 0; j < planetArray.length; j++){
        planetArray[i].attract(planetArray[j]);
   }
   }

}