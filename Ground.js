class Ground {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //moves rectangle to the given x, y position
      translate(pos.x, pos.y);
      // rotate the rectangle to the given angle
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("brown");
      //white
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  }
  