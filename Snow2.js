class Snow2{
    constructor(x,y){
        var options = {
            restitution:0.1,
            friction:0.2,
            density:0.1
         }
         this.body  = Bodies.circle(x,y,2,options);
         this.radius= 2;
         this.image = loadImage("snow5.webp");
         World.add(world,this.body);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,900), y:random(50,600)});
        }
      }
      display(){
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,30,30)
      }
}