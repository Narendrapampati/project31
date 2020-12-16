class Particle{
    constructor(x,y,r){
     var opt={
         isStatic:false,
         restitution:0.5
     }
     this.r = r;
     this.body = Bodies.circle(x,y,r);
     this.color = color(random(40,255),random(30,255),random(20,255));
     this.stroke = color(random(0,55), random(0,55),random(0,55));
     World.add(world,this.body);



    }
   display(){
     var pos = this.body.position;
     var angle = this.body.angle;
       
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     stroke (this.stroke);
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
      
     pop(); 



   }
   

}