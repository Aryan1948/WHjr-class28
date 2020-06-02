class Slingshot{
    constructor(body1,body2){
    var option={
    bodyA:body1,
    bodyB:body2,
    length:12,
    stiffness:0.9
    }
    this.sling=Matter.Constraint.create(option)
    World.add(world,this.sling)
    
    }
    display(){
    var pointA=this.sling.bodyA.position;
    var pointB=this.sling.bodyB.position;
    stroke("red");
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
        
   
}