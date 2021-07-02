class Paper{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
    }
}
