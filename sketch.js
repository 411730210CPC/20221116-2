// var face_x,face_y,face_size
var face_x = [] 
var face_y = []
var face_size = []
var face_num = 10

var song
var songIsplay=false //設定此變數為'假'(false)，收到按下滑鼠把變數改為"真"(true)
var amp
var vol
function preload(){
  song = loadSound("Spooky Boop - Otis McDonald.mp3");
}

function setup()  {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  }

  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,400)  //臉的大小100~400
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }

function draw()  {
    background("#caf0f8")
    textSize(50)
    text("X:"+mouseX+"  Y:"+mouseY,50,50)
    for(var j=0;j<face_num;j++){
       push()
       var f_s = face_size[j]
  translate(width/2,height/2)
    fill('#faedcd')
    ellipse(0,0,400)  //臉
    fill('#ffffff')
    ellipse(60,-40,50,90)
    ellipse(-60,-40,-50,-90)
    //左眼
    fill(0)
    ellipse(-60+mouseX/80,-50+mouseY/60,30)
    noFill()
    //右眼
    fill(0)
    ellipse(50+mouseX/80,-50+mouseY/60,30)
    fill("#f5ebe0")//設定以下元件的顏色
  ellipse(-180,-160,150)//左邊小圓
  ellipse(180,-160,150)//右邊小圓
  fill('#d4a373')
  ellipse(-180,-160,75)
  ellipse(180,-160,75)
  fill('#ffafcc')
  ellipse(10,60,30)
}
  fill('#b5838d')
    arc(0,100,200,100,0,180)
    fill('#faedcd')
    if(mouseIsPressed)
    {   //mouseIsPressed為true，代表有按下滑鼠
    arc(0,99,200,40,0,180)  
    }
    else
    {   //mouseIsPressed為false，代表沒有按下滑鼠
     arc(0,99,200,90,0,180)
    }
    noFill()
  pop()
}
function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}