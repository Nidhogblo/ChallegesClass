aux = 0;
aux1=0;
aux11=0;
aux2=0;
aux3=0;

function setup() {
  createCanvas(800, 480)
  frameRate(1)
}

function draw() {
  background(220);
  
  noFill();
  //stroke(255,102,0);
  //line(120,80,320,20);
  //line(320,300,120,300);
  //line(120,80,320,20);
  //line(320,300,120,300);
  
  if(aux == 1){
    stroke(0);
    bezier(120,40, 320,20,320,300, 330,300);      
    stroke(0);
    bezier(330,300, 330,94,380,58, 600,40);  
  }
  else if(aux == 2){
    stroke(0);
    bezier(120,40, 320,20,320,300, 330,300);      
    stroke(0);
    bezier(330,300, 330,94,380,58, 600,40); 
    storyboard(120,40,320,20,320,300,330,300);
    storyboard(330,300,330,94,380,58,600,40);
  }
  else if(aux == 3){
      if(aux2==0){
      move1(120,40,320,20,320,300,330,300);
      aux2++
      }
      if(aux3==1){
       move2(330,300,330,94,380,58,600,40);
       aux3=2;
      }
    }
   
       

}

async function move1(x1, y1, x2, y2, x3, y3, x4, y4){  
  process = false;
  steps = 150;
  for (i = 0; i <= steps; i++){
    await sleep(70)
    clear();
    background(220);
    t = i / float(steps);   
    x = bezierPoint(x1, x2, x3, x4, t)
    y = bezierPoint(y1, y2, y3, y4, t);
    await sleep(10)
    fill(255);
    if(aux1>20){
      aux11=aux11+.95;
    }
    aux1=aux1+.15;
   
    ellipse(x, y, 20+aux11, 22+aux1);
  }
  aux3++
  
}
async function move2(x1, y1, x2, y2, x3, y3, x4, y4){  
  process = false;
  steps = 1500;
  for (i = 0; i <= steps; i++){
    await sleep(70)
    clear();
    background(220);
    t = i / float(steps);   
    x = bezierPoint(x1, x2, x3, x4, t)
    y = bezierPoint(y1, y2, y3, y4, t);
    await sleep(10)
    fill(255);
   if(aux1>20){
      aux11=aux11-.85;
    }
    aux1=aux1-.15;
    ellipse(x, y, 20+aux11, 22+aux1);
  }
  aux3++
  
}


function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}


function storyboard(x1, y1, x2, y2, x3, y3, x4, y4) {
  fill(255);
  nSteps = 10;
  for (i = 0; i <= nSteps; i++) {
    t = i / float(nSteps);
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 20, 22);
  }
}


function mouseClicked() {
  aux++;
}
