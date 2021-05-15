class Particle{
 constructor(x, y, width, height, angle){
     var options={
        restitution: 0.5,
        friction: 0.005,
     }
      this.body = Bodies.circle(x, y, this.r, options)
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.width = width;
      this.height = height;
      World.add(world, this.body);
 }
 display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  noStroke();
  translate(pos.x, pos.y)
  rotate(angle)
  ellipse(0, 0, this.width, this.height)
  pop();
 }
}