class Chain {
constructor(body1,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
    var options=
        {
            bodyA:body1,
            //bodyB:body2,
           // length:100,
          stiffness:0.1,
            pointB:{x:this.offsetX,y:this.offsetY},
            density: 0.2

            
        }
    this.chain=Constraint.create(options)
    this.pointB={x:this.offsetX,y:this.offsetY};
    World.add(world,this.chain)
    }
    display()
    {
    

       var pointA=this.chain.bodyA.position;
       var pointB=this.pointB;
       //console.log(pointB)

       strokeWeight(4);
      
       var anchor1x=pointA.x;
       var anchor1y=pointA.y;

       var anchor2x=pointB.x;
       var anchor2y=pointB.y;

       line(anchor1x,anchor1y,anchor2x,anchor2y)
    }
}