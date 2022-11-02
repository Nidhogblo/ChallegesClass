function setup() {
    createCanvas(400, 400);
    background(220);
    noSmooth();
    
    algo(1,2,100,20);
    algo(10,200,50,10);
    algo(300,300,10,10);
    algo(200,300,250,50);
    algo(350,350,100, 300);
    
  }
  
  function algo(x0,y0,x1,y1){
    var x,y,dx,dy,p;
    if(x0>x1){
      
    }
    else{
      
    }
    x=x0;
    y=y0;
    
    dy=(y1 - y0);
    dx=(x1 - x0);
    
    p = dy - dx;
    
    while (x < x1) {
      if (p >= 0) {
          point(x, y);
          y = y + 1;
          p = p + dy - dx;
          }
          else {
              point(x, y);
              p = p + dy;
              x = x + 1;
          }
    }
    
     while (y < y1)
      {
          if (p >= 0) {
              point(x, y);
              y = y + 1;
              p = p + dy - dx;
          }
          else {
              point(x, y);
              p = p + dy;
              x = x + 1;
          }
      }
  }