var ObjectArray = [];

function setup() {
    createCanvas(4000, 2000);

    //Create the star and planets
    ObjectArray[0] = new Planet(10000, 100, {x: 2200, y: 1000}); //19000
    //ObjectArray[0] = new physicsObject(10000, 100, {x: 2000, y: 1000});
    ObjectArray[2] = new Planet(1, 5, {x: 2540, y: 1160});

    //Planet Generator

    //Switch to a random x, y generator
    xCount = 2500;
    yCount = 1120
    
    for (var i = 1; i < 2; i++) {
        ObjectArray[i] = new Planet(10, 30, {x: xCount, y: yCount})
        ObjectArray[i].addOrbitalVelocity(ObjectArray[0]);
        xCount += 200;
        
        
    }

}

function draw() {
    background(255);
    fill('yellow');
    //star.draw();
    
    var EraseArray = ObjectArray;

    for (var i = 0; i < ObjectArray.length; i++) {
        fill(0);
        ObjectArray[i].draw();
        

        for (var j = 0; j < ObjectArray.length; j++) {
            if (ObjectArray[i] != ObjectArray[j]){

                ObjectArray[i].applyForces(ObjectArray[j]);

               var colisionObject = ObjectArray[i].checkCollision(ObjectArray[j]);

               if (colisionObject){
                    EraseArray[i] = colisionObject;
                    EraseArray.splice(j);
               }
            }
        }

        
        
    }

    ObjectArray = EraseArray;

}