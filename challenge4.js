function setup() {
  createCanvas(400, 400);
}
slidev=5;
valuer=0;
valueg=0;
valueb=0;
aux=-1;
function draw() {
  background(220);
   if(aux==-1){
    valuer = random(0, 255);
    valueg=  random(0, 255);
    valueb=  random(0, 255);
     aux++;
   }
  
  translate(200,200);
  fill(valuer,valueg,valueb);
  polygon(0, 0, 82, slidev);

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseClicked() {
  if (aux <7) {
    slidev++;
    aux++;
    valuer = random(0, 255);
    valueg=  random(0, 255);
    valueb=  random(0, 255);
  }
  else{
    slidev=5;
    aux=5;
  }
}