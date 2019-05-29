class physicsObject{

    constructor(mass, size, location, velocity){
        //Constructor Variables
        this.mass = mass;
        this.size = size;
        this.location = createVector(location.x, location.y);

        //Class Variables

        this.velocity = createVector(0, velocity);
        this.acceleration = createVector(0, 0);

    }

    draw(){
        ellipse(this.location.x, this.location.y, this.size) 
    }

    attract(physicsObject){
        //Gravity Equation: (G * M1 * M2) / r^2 where G = 6.67408 × 10-11

        var G = 6.67408 * Math.pow(10, -11); //Gravitational Constant

        var distanceVector = p5.Vector.sub(this.location, physicsObject.location);

        var R = p5.Vector.mag(distanceVector); //Distance between the two objects

        var gravityMagnitude = (this.mass * physicsObject.mass) / Math.pow(R, 2);

        var gravityForce = distanceVector.setMag(gravityMagnitude)
    
        physicsObject.addForce([gravityForce]);

        
    }

    addForce(forces){

        var force = createVector(0, 0);

        for (var i = 0; i < forces.length; i++){
            force.add(forces[i]);
        }

        var acceleration = force.div(this.mass);
        this.velocity.add(acceleration);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
    }

    
}