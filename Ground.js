class Ground {

              constructor(x,y,width,height){
                 var properties = {

                     isStatic : true

                 }

               this.body = Bodies.rectangle(x,y,width,height,properties);
               this.width = width;
               this.height = height;
               World.add(world, this.body);

}


              display(){

                rectMode(CENTER);
                fill("brown");
                rect(this.body.position.x,this.body.position.y,this.width,this.height);
              }

}