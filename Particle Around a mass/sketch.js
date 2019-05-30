var ObjectArray = [];

function setup() {
    createCanvas(4000, 2000);

    //Create the star and planets
    ObjectArray[0] = new physicsObject(10000, 100, {x: 2000, y: 1000});


    //Planet Generator

    //Switch to a random x, y generator
    xCount = 2050;
    yCount = 1100
    for (var i = 1; i < 4; i++) {
        ObjectArray[i] = new Planet(20, 30, {x: xCount, y: yCount})
        ObjectArray[i].addOrbitalVelocity(ObjectArray[0]);
        xCount += 100;
        
    }
}

function draw() {
    background(255);
    fill('yellow');
    //star.draw();
    

    for (var i = 0; i < ObjectArray.length; i++) {
        fill(0);
        ObjectArray[i].draw();
        //star.applyForces(ObjectArray[i]);

        //Dose not work currently; Meant to apply forces between the planets

        for (var j = 0; j < ObjectArray.length; j++) {
            if (ObjectArray[i] != ObjectArray[j]){
                ObjectArray[i].applyForces(ObjectArray[j]);
            }
        }
        
    }

}