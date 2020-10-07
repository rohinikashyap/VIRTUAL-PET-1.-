//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;
var dog1;
function preload()
{
  //load images here
  dog1=loadImage("images/dog.png");
  happyDog=loadImage("images/dog1.png");
 
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300);
  dog.addImage(dog1);
  dog.scale=0.15;
   foodStockRef=database.ref('food');
  foodStockRef.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){


dog.addImage(happyDog);


}
  drawSprites();
  //add styles here
fill(255,255,255)
text("Note:Press UP_ARROW key To Feed Drago Milk!",50,30);
text("Food Remaining:"+19,170,200);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if (x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}