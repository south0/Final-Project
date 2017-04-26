var  circle, ghost, moving;
var platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10, platform11, platform12, platform13, platform14, platform15, platform16, platform17, platform18;
var GRAVITY = 1;
var song;
var sideL, sideR;
var portal1, portal2;

ww = 1450;
wh = 750;


// platforms
platformh1 = 5;
platformh2 = 5;
platformh3 = 5;
platformh4 = 5;
platformh5 = 5;
platformh6 = 5;
platformh7 = 5;
platformh8 = 5;
platformh9 = 5;
platformh10 = 5;
platformh11 = 5;
platformh12 = 5;
platformh13 = 5;
platformh14 = 5;
platformh15 = 5;
platformh16 = 5;
platformh17 = 5;
platformh18 = 5;



platformw1 = ww;
platformw2 = 500;
platformw3 = 200;
platformw4 = 400;
platformw5 = 200;
platformw6 = 300;
platformw7 = 100;
platformw8 = 200;
platformw9 = 100;
platformw10 = 600;
platformw11 = 100;
platformw12= 100;
platformw13= 100;
platformw14= 50;
platformw15= 50;
platformw16= 50;
platformw17= 50;
platformw18= 100;


x1= 725;
y1= 750;
x2= 855;
y2= 600;
x3= 1325;
y3= 575;
x4= 1025;
y4= 450;
x5= 525;
y5= 400;
x6= 325;
y6= 650;
x7= 125;
y7= 480;
x8= 825;
y8= 300;
x9= 125;
y9= 100;
x10= 925;
y10= 100;
x11= 45;
y11= 600;
x12= 225;
y12= 300;
x13= 1225;
y13= 300;
x14= 425;
y14= 250;
x15= 325;
y15= 550;
x16= 1025;
y16= 250;
x17= 525;
y17= 200;
x18= 125;
y18= 300;

// next buttons
nextx1 = 1000;
nexty1 = 210;
nextx2 = 315;
nexty2 = 510;

backx1 = 105;
backy1 = 60;



st = 0;
am = 1;
rr = 1;



// modes
antiG = false;
level2 = false;

state1 = true;
state2 = false;

// background color
r= 100;
g =100;
b= 100;

tey = 'black';
 

circlex = 510;
circley = 0;

// function preload(){
//   song1 = loadSound('music/song1.mp3');
//   song2 = loadSound('music/song2.mp3');
//   song3 = loadSound('music/song3.mp3');
//   song4 = loadSound('music/song4.mp3');
//   song5 = loadSound('music/song5.mp3');
//   song6 = loadSound('music/song6.mp3');
//   song7 = loadSound('music/song7.mp3');
//   song8 = loadSound('music/song8.mp3');
//   song9 = loadSound('music/song9.mp3');
//   song10  = loadSound('music/song10.mp3');
// }




function setup() {




circle = createSprite(circlex, circley);


circle.addAnimation('ghost', "ghost/ghost2.png", "ghost/ghost3.png", "ghost/ghost4.png");

circle.addAnimation('walkingR' , "ghost/walkingR1.png", "ghost/walkingR2.png", "ghost/walkingR3.png", "ghost/walkingR4.png", "ghost/walkingR5.png");
circle.addAnimation('walkingL' , "ghost/walkingL1.png", "ghost/walkingL2.png", "ghost/walkingL3.png", "ghost/walkingL4.png", "ghost/walkingL5.png");

circle.addAnimation('dancing' , "ghost/dance1.png", "ghost/dance2.png", "ghost/dance3.png", "ghost/dance4.png", "ghost/dance5.png", "ghost/dance6.png");

circle.scale = .75;

circle.animation.frameDelay = 15;


// songA1.play(st, rr, am);


	


  createCanvas(ww, wh);  
  

  
  
  platform1 = createSprite(x1, y1, platformw1, platformh1);

  platform2 = createSprite(x2, y2, platformw2, platformh2);

  platform3 = createSprite(x3, y3, platformw3, platformh3);

   platform4 = createSprite(x4, y4, platformw4, platformh4);

  platform5 = createSprite(x5, y5, platformw5, platformh5);

   platform6 = createSprite(x6, y6, platformw6, platformh6);

  platform7 = createSprite(x7, y7, platformw7, platformh7);

   platform8 = createSprite(x8, y8, platformw8, platformh8);

  platform9 = createSprite(x9, y9, platformw9, platformh9);

  platform10 = createSprite(x10, y10, platformw10, platformh10);

  platform11 = createSprite(x11, y11, platformw11, platformh11);

  platform12 = createSprite(x12, y12, platformw12, platformh12);

   platform13 = createSprite(x13, y13, platformw13, platformh13);

  platform14 = createSprite(x14, y14, platformw14, platformh14);

   platform15 = createSprite(x15, y15, platformw15, platformh15);

  platform16 = createSprite(x16, y16, platformw16, platformh16);

   platform17 = createSprite(x17, y17, platformw17, platformh17);

  platform18 = createSprite(x18, y18, platformw18, platformh18);

  sideL = createSprite(0,300, .0001, 2000);
  sideR = createSprite(1450,300, .0001, 2000);

  next1 = createSprite(nextx1, nexty1);
  next2 = createSprite(nextx2, nexty2);

  back1 = createSprite(backx1, backy1);
  

back1.addAnimation('nextsong', 'next/next1.png','next/next2.png','next/next3.png','next/next4.png','next/next5.png','next/next6.png','next/next7.png','next/next8.png','next/next9.png','next/next10.png','next/next11.png','next/next12.png');
  
  next1.addAnimation('nextsong', 'next/next1.png','next/next2.png','next/next3.png','next/next4.png','next/next5.png','next/next6.png','next/next7.png','next/next8.png','next/next9.png','next/next10.png','next/next11.png','next/next12.png');
next2.addAnimation('nextsong', 'next/next1.png','next/next2.png','next/next3.png','next/next4.png','next/next5.png','next/next6.png','next/next7.png','next/next8.png','next/next9.png', 'next/next10.png','next/next11.png','next/next12.png');

next1.animation.frameDelay = 10;
next2.animation.frameDelay = 10;
back1.animation.frameDelay = 10;
next1.scale = 1.2;
next2.scale = 1.2;

back1.scale = 1.2;
back1.mirrorX(-1);
portal1 = createSprite(1300, 700);

portal1.addAnimation('portal', 'portal/portal1.png','portal/portal2.png','portal/portal3.png','portal/portal4.png','portal/portal5.png','portal/portal6.png','portal/portal7.png'
	,'portal/portal8.png','portal/portal9.png','portal/portal10.png','portal/portal11.png','portal/portal12.png','portal/portal13.png','portal/portal14.png','portal/portal15.png','portal/portal16.png'
	,'portal/portal17.png','portal/portal18.png','portal/portal19.png','portal/portal20.png','portal/portal21.png','portal/portal22.png','portal/portal23.png','portal/portal24.png','portal/portal23.png'
	,'portal/portal22.png','portal/portal21.png','portal/portal20.png','portal/portal19.png','portal/portal18.png','portal/portal17.png','portal/portal16.png','portal/portal15.png','portal/portal14.png'
	,'portal/portal13.png','portal/portal12.png','portal/portal11.png','portal/portal10.png','portal/portal9.png','portal/portal8.png','portal/portal7.png','portal/portal6.png','portal/portal5.png'
	,'portal/portal4.png','portal/portal3.png','portal/portal2.png','portal/portal1.png');
portal1.animation.frameDelay = 10;

  platform1.shapeColor = "white";
  platform2.shapeColor =  "white";
  platform3.shapeColor = "white";
  platform4.shapeColor = "white";
  platform5.shapeColor = "white";
  platform6.shapeColor = "white";
  platform7.shapeColor = "white";
  platform8.shapeColor = "white";
  platform9.shapeColor = "white";
  platform10.shapeColor = "white";
  platform11.shapeColor = "white";
  platform12.shapeColor = "white";
  platform13.shapeColor = "white";
  platform14.shapeColor = "white";
  platform15.shapeColor = "white";
  platform16.shapeColor = "white";
  platform17.shapeColor = "white";
  platform18.shapeColor = "white";



if(keyWentDown("UP_ARROW")){
     window.clearTimeout(timeoutHandle);}
     if(keyWentDown("RIGHT_ARROW")){
     window.clearTimeout(timeoutHandle);}
     if(keyWentDown("LEFT_ARROW")){
     window.clearTimeout(timeoutHandle);}
     if(keyWentDown("DOWN_ARROW")){
     window.clearTimeout(timeoutHandle);}

 
  
}

function draw() {
   



   background(r, g, b);
  

  circle.changeAnimation(ghost);
  

  circle.velocity.y += GRAVITY;

if(circle.overlap(next1)){

  if(keyWentDown(' ')){
		next();
	}
}

if(circle.overlap(next2)){

  if(keyWentDown(' ')){
		next();
	}
}

if(circle.overlap(back1)){

  if(keyWentDown(' ')){
		back();
	}
}

// if(circle.overlap(portal1)){
//   if(state2){
//   stage2();
//   state1 = false;
//   state2 = true;

//  }
// if(state1){

//   stage1();
//   state2 = false;
//   state1 = true;

//  }
// }

    if(keyWentDown("UP_ARROW")){
    circle.velocity.y = -10;
    

  }
    
     if(keyWentDown("RIGHT_ARROW")){
     circle.velocity.x = 2;

     circle.changeAnimation('walkingR');
     
     
  }else if (keyWentUp ("RIGHT_ARROW")){
    circle.velocity.x = 0;
    circle.changeAnimation('ghost');
    
  }

   if(keyWentDown("LEFT_ARROW")){
    circle.velocity.x = -2;
    circle.changeAnimation('walkingL');
    
    

  }else if (keyWentUp ("LEFT_ARROW")){
    circle.velocity.x = 0;
    circle.changeAnimation('ghost');
    
  }

if(circle.collide(sideL)){
    circle.velocity.x = 0;
    
    }

    if(circle.collide(sideR)){
    circle.velocity.x = 0;
    
    }



  if(circle.collide(platform1)){
    circle.velocity.y = 0;
    changecolorpos();
    
  }
if(circle.collide(platform2, 100, 5)){
    circle.velocity.y = 0;
    changecolorneg();
   

  }
 if(circle.collide(platform3)){
    circle.velocity.y = 0;
    changecolorpos();
    
  }
 if(circle.collide(platform4)){
    circle.velocity.y = 0;
    changecolorneg();
   
  
  }
if(circle.collide(platform5)){
    circle.velocity.y = 0;
    changecolorpos();
  
  }
 if(circle.collide(platform6)){
    circle.velocity.y = 0;
    changecolorpos();
   
  }
if(circle.collide(platform7)){
    circle.velocity.y = 0;
    changecolorneg();
   
  }
if(circle.collide(platform8)){
    circle.velocity.y = 0;
    changecolorpos();
  }
 	if(circle.collide(platform9)){
    circle.velocity.y = 0;
    changecolorpos();
  }
  if(circle.collide(platform10)){
    circle.velocity.y = 0;
    changecolorneg();
  }
  if(circle.collide(platform11)){
    circle.velocity.y = 0;
    changecolorneg();
  }
  if(circle.collide(platform12)){
    circle.velocity.y = 0;
    changecolorpos();
  }
  if(circle.collide(platform13)){
    circle.velocity.y = 0;
    changecolorpos();
  }
  if(circle.collide(platform14)){
    circle.velocity.y = 0;
    changecolorneg();
  }
  if(circle.collide(platform15)){
    circle.velocity.y = 0;
    changecolorneg();
  }
  if(circle.collide(platform16)){
    circle.velocity.y = 0;
    changecolorpos();
  }
  if(circle.collide(platform17)){
    circle.velocity.y = 0;
    changecolorpos();
  }
  if(circle.collide(platform18)){
    circle.velocity.y = 0;
    changecolorpos();
  }


// if (mouseIsPressed){
//   level2 = true;
// }

 


if(keyWentDown('o')){
  circle.scale = 2;

}

if(state1){
if (keyWentDown('w')){
  stage2();
  state1 = false;
  state2 = true;
}
 }
if(state2){
if (keyWentDown('w')){
  stage1();
  state2 = false;
  state1 = true;
}
 }

if(keyWentDown('w')){
  stage2();

}

if(keyWentDown('q')){
  stage1();

}

 
function stage2(){

  
  circlex= 25;
  circley= 0;


	nextx1 = 1375;
	nexty1 = 100;
	nextx2 = 10;
	nexty2 = 690;

	backx1 = 1370;
	backy1 = 300;
 
  platformh2 = 100;
  platformh3 = 50;
  platformh4 = 100;
  platformh5 = 100;
  platformh6 = 100;
  platformh7 = 500;
  platformh8 = 300;
  platformh9 = 200;
  platformh10 = 100;
  platformh11 = 100;
  platformh12 = 100;
  platformh13 = 100;
  platformh14 = 100;
  platformh15 = 100;
  platformh16 = 100;
  platformh17 = 300;
  platformh18 = 100;

  
  
 	platformw2 = 600;
  platformw3 = 400;
  platformw4 = 200;
  platformw5 = 200;
  platformw6 = 900;
  platformw7 = 50;
  platformw8 = 250;
  platformw9 = 100;
  platformw10 = 300;
  platformw11 = 100;
  platformw12= 100;
  platformw13= 200;
  platformw14= 100;
  platformw15= 50;
  platformw16= 100;
  platformw17= 50;
  platformw18= 100;
  x1= 700;
  y1= 750;
  x2= 1000;
  y2= 300;
  x3= 1200;
  y3= 575;
  x4= 1000;
  y4= 450;
  x5= 500;
  y5= 400;
  x6= 500;
  y6= 650;
  x7= 75;
  y7= 300;
  x8= 1225;
  y8= 100;
  x9= 300;
  y9= 100;
  x10= 900;
  y10= 100;
  x11= 0;
  y11= 600;
  x12= 800;
  y12= 500;
  x13= 1350;
  y13= 200;
  x14= 400;
  y14= 250;
  x15= 300;
  y15= 550;
  x16= 1000;
  y16= 250;
  x17= 500;
  y17= 50;
  x18= 100;
  y18= 300;
  next1.remove();
  next2.remove();
  back1.remove();
  platform2.remove();
  platform3.remove();
  platform4.remove();
  platform5.remove();
  platform6.remove();
  platform7.remove();
  platform8.remove();
  platform9.remove();
  platform10.remove();
  platform11.remove();
  platform12.remove();
  platform13.remove();
  platform14.remove();
  platform15.remove();
  platform16.remove();
  platform17.remove();
  platform18.remove();
  circle.remove();
 
  setup();
  circle.scale = .5;
  
  

 }


function stage1(){
  
  circlex = 510;
circley = 0;

  nextx1 = 980;
nexty1 = 210;
nextx2 = 290;
nexty2 = 510;
 
 backx1 = 105;
backy1 = 60;

  platformh1 = 5;
platformh2 = 5;
platformh3 = 5;
platformh4 = 5;
platformh5 = 5;
platformh6 = 5;
platformh7 = 5;
platformh8 = 5;
platformh9 = 5;
platformh10 = 5;
platformh11 = 5;
platformh12 = 5;
platformh13 = 5;
platformh14 = 5;
platformh15 = 5;
platformh16 = 5;
platformh17 = 5;
platformh18 = 5;



platformw1 = ww;
platformw2 = 500;
platformw3 = 200;
platformw4 = 400;
platformw5 = 200;
platformw6 = 300;
platformw7 = 100;
platformw8 = 200;
platformw9 = 100;
platformw10 = 600;
platformw11 = 100;
platformw12= 100;
platformw13= 100;
platformw14= 50;
platformw15= 50;
platformw16= 50;
platformw17= 50;
platformw18= 100;

x1= 725;
y1= 750;
x2= 855;
y2= 600;
x3= 1325;
y3= 575;
x4= 1025;
y4= 450;
x5= 525;
y5= 400;
x6= 325;
y6= 650;
x7= 125;
y7= 480;
x8= 825;
y8= 300;
x9= 125;
y9= 100;
x10= 925;
y10= 100;
x11= 45;
y11= 600;
x12= 225;
y12= 300;
x13= 1225;
y13= 300;
x14= 425;
y14= 250;
x15= 325;
y15= 550;
x16= 1025;
y16= 250;
x17= 525;
y17= 200;
x18= 125;
y18= 300;
next1.remove();
  next2.remove();
  back1.remove();
  platform2.remove();
  platform3.remove();
  platform4.remove();
  platform5.remove();
  platform6.remove();
  platform7.remove();
  platform8.remove();
  platform9.remove();
  platform10.remove();
  platform11.remove();
  platform12.remove();
  platform13.remove();
  platform14.remove();
  platform15.remove();
  platform16.remove();
  platform17.remove();
  platform18.remove();
  circle.remove();
  setup();
  circle.scale = .75;
  


 }

   
if (keyWentDown('x')){
  GRAVITY = -.1;

  antiG = true;
  
  
}
if (keyWentDown('c')){
  GRAVITY = 1;

  antiG = false;
  
  
}

  
if(antiG){
    if(keyWentDown("DOWN_ARROW")){
    circle.velocity.y = 3;

  }
}




  drawSprites();
}



var timeoutHandle = window.setTimeout(dance, 5000);






function dance() {
	circle.changeAnimation('dancing');
	timeoutHandle = window.setTimeout(dance, 5000);
	
}




function playvideo(){
  
document.getElementById("video").play();
}



var srcArray = ["music/song1.mp3", "music/song2.mp3", "music/song3.mp3","music/song4.mp3","music/song5.mp3","music/song6.mp3","music/song7.mp3","music/song8.mp3","music/song9.mp3","music/song10.mp3"];

var counter = 0;
   



 function next(){
    if(counter > 10){
        counter = 0;
    }; 

document.getElementById("currentaudio").src = srcArray[++counter];
console.log(counter);

 }


function back(){
    if(counter < 0){
        counter = 0;
    }; 

document.getElementById("currentaudio").src = srcArray[--counter];
console.log(counter);

 }



function changecolorpos(){
	r= r + Math.random();
    g= g + Math.random();
    b= b + Math.random();
}
function changecolorneg(){
	r= r - Math.random();
    g= g - Math.random();
    b= b - Math.random();
}


