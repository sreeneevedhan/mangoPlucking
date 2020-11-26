class Boy{
  constructor(bodyA,pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    
    this.image=loadImage("Plucking mangoes/boy.png");
    this.pointB = pointB
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }
  display(){
    
   imageMode(CENTER);
    image(this.image, 150, 630, 100, 100);
    
    if(this.chain.bodyA){
      var pointA = this.chain.bodyA.position;
      var pointB =this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
  fly(){
    this.chain.bodyA=null;
  }
  attach(body){
    
    this.chain.bodyA=body;
  
  }
}
