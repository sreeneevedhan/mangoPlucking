class Mango{
    constructor(x, y, r) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        this.image = loadImage("plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        image(this.image, pos.x, pos.y, this.r,this.r);
    
      }
    };