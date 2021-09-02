var trex, trex_running
function preload() {
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png") }
 


function setup() {
  createCanvas(600,200)
  trex = createSprite(50,100)
  trex.scale = 0.5
  trex.addAnimation("this is a running t-rex",trex_running)
}


function draw() {
  background("white")
  drawSprites()
}
