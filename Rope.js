class Rope {

    constructor(fixedBody,fixedPoint){
        var properties = {
            bodyA:fixedBody,
            pointB:fixedPoint,
            stiffness:1.3,
            length:320,
        }

        this.pointB = fixedPoint;
        this.rope = Matter.Constraint.create(properties);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
           push();
           stroke("blue");
           strokeWeight(4);

           line(pointB.x,pointB.y, pointA.x, pointA.y);
           pop();
    }
}