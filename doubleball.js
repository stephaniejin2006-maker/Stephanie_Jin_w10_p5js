class doubleball {

  constructor(posX,posY){

    this.x = posX;
    this.y = posY;


    this.d = random(30,100);

    this.xDir = random(-1,1);
    this.yDir = random(-1,1);

    this.r = 242;
    this.g = 193;
    this.b = 50;
  }


  display(r,g,b,d){

    this.r = r;
    this.g = g;
    this.b = b;

    this.d = d;

    fill(this.r,this.g,this.b);
    circle(this.x,this.y,this.d);
    fill(this.r+30,this.g+50,this.b+10);
    circle(this.x+20,this.y,this.d);

  }

  update(s){

    this.x += this.xDir*s;
    this.y += this.yDir*s;

  }

  keepInCanvas(){

    if ((this.x > width)||(this.x < 0)){
      this.xDir = -this.xDir;

    }

    if ((this.y > height)||(this.y < 0)){
      this.yDir = -this.yDir;

    }

  }

}