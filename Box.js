class Box {

    constructor(x,y,width,height){

        var properties = {

            restitution:0.9,
            friction:1.2,
            density:0.4,
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
         rectMode(CENTER);
         strokeWeight(5);
         stroke("green");
         fill("lightblue")
         rect(0,0,this.width,this.height);


         pop();

     }


}