class Ball {

    constructor(x,y,width,height){

        var properties = {
        density:1,
        frictionAir:0.004,

        }

      this.body = Bodies.rectangle(x,y,width,height,properties);
      this.width = width;
      this.height = height;

      World.add(world,this.body);

    }

     display(){

         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(this.body.angle);
         strokeWeight(5);
         stroke("yellow");
         fill("orange")
         ellipse(0,0,this.width,this.height);


         pop();

     }


}