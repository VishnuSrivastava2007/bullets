class Paper{

constructor(x,y,radious){

var options ={

isStatic:false,
restitution:0.2,
friction:0.3,
density:1.0
}
this.radious = radious
this.body = Bodies.circles(x,y,radious,options);
}
display(){

var paperpos=this.body.position;
push()
translate(paperpos.x,paperpos.y,paperpos.r);
rectMode(CENTRE)
strokeWeight(3);
fill(255,0,255)
ellicpse(0,0,this.r,this.r);
pop()
}

}
  