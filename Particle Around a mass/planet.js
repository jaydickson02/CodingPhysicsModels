class Planet extends physicsObject {

    addOrbitalVelocity(OrbitedObject){ //Where physics object is whats being orbited around
        //Generate a vector that is tangental to the pull of gravity
        
        //Calculate the magnitude of the vector, easy its only rocket science. (Technically no its centripital force but whos counting)

        //Equation for velocity: SQRT(Fg * r / m) = V

        var distanceVector = p5.Vector.sub(OrbitedObject.location, this.location);

        var Radius = p5.Vector.mag(distanceVector); //Distance between the two objects

        var Fg = OrbitedObject.calculateGravityForce(this);

        var vectorMagnitude = Math.sqrt(p5.Vector.mag(Fg) * Radius / this.mass);
        
        

        if (Fg.x == 0){

            this.velocity.x = vectorMagnitude;

        } else if (Fg.y == 0){

            this.velocity.y = vectorMagnitude;

        } else {

            var gravityPerpVector = this.calcPerpendicularVector(Fg);

            var velocityVector = gravityPerpVector.setMag(vectorMagnitude);

            this.velocity = velocityVector;
        }

        



    }

    calcPerpendicularVector(vector){ //Returns  a normalised vector that is perpendicular to the one put in
        
        //Use the null dot product equation: 0 = x * x_ + y * y_ the resulting x_ and y_ will be a vector that is perpendicular to the original vector

        var x = vector.x;
        var y = vector.y;

        var x_ = 1; //This numbers Neg or Pos value will swap the direction

        var y_ = -(x*x_)/y
        
        var newVector = createVector(x_, y_);

        return newVector.normalize();


    }

}