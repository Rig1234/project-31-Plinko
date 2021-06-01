class Particle {
    constructor(x,y,r){
        var options = {
            "friction":0.01,
            "restitution":0.02,
            "density":0.001
        }

      this.radius = r
      this.body = Bodies.circle(x,y,r,options);
     this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        //fill("black");
        //stroke("red");
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}
