function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(56, 213, 245);
  let x =mouseX
  let y =mouseY
  let HeadRadius=50
  let NeckHeight=25
  let StomachLength=50
  circle(x,y,HeadRadius)
  
frameRate(100)
line(x,y+(HeadRadius/2),x,y+(HeadRadius/2)+NeckHeight)  
line(x+50,y+(HeadRadius/2)+NeckHeight,x-50,y+(HeadRadius/2)+NeckHeight)
line(x,y+(HeadRadius/2)+NeckHeight,x,y+(HeadRadius/2)+NeckHeight+StomachLength)
  
  line(x,y+(HeadRadius/2)+NeckHeight+StomachLength,x-50,y+(HeadRadius/2)+NeckHeight+StomachLength+50) 
line(x,y+(HeadRadius/2)+NeckHeight+StomachLength,x+50,y+(HeadRadius/2)+NeckHeight+StomachLength+50)

  line(x-10,y+10,x+10,y+10)
circle(x+10,y-5,10)
circle(x-10,y-5,10)

}