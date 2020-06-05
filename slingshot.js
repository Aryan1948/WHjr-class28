class Slingshot{
    constructor(body1,point2){
    var option={
    bodyA:body1,
    pointB:point2,
    length:12,
    stiffness:0.9
    }
    this.sling=Matter.Constraint.create(option)
    World.add(world,this.sling)
    
    }
    display(){
    if (this.sling.bodyA!==null){

        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        

    }
    
    }
    fly(){
    this.sling.bodyA=null;
    }
        
   
}