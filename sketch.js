var fedtime,lastfed,foodobj,feedDog,addfood;
var changegameState,radinggameState;
var bedroom,garden,washroom;
function preload()
{
  bedroom = loadImage("new/Bed Room.png");
  garden = loadImage("new/Garden.png");
  washroom = loadImage("new/Wash Room.png");
}

function setup() {
  createCanvas(800, 700);
  var food1 = new food1(); 
  feed = createButtton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addfood = createButton("add food");
  addfood.position(800,95);
  addfood.mousePressed(addfoods);

  if(currentTime ==(lastfood+1)){
    update("playing");
    foodobj.garden();
  
} else if(currentTime ==(lastfood+2)){
  update("sleeping");
  foodobj.beedroom();
} else if(currentTime ==(lastfood+2)&& currentTime<=(lastfed+4)){
  update("bathing");
  foodobj.washroom();
} else {
  update("Hungry");
  foodobj.display);
}


function draw() {  

  drawSprites();

  bedroom(){
    background(bedroom,550,500);
  }
  garden(){
    background(garden,550,500);
  }
  washroom(){
    background(washroom,550,500;)
  }
food1.display();

  var fedtime = database.ref('ffeed time');
  fedtimeRef.on("value",(data)=>{
   lastfed = data.val();
  })
  readState = database.ref('gameState');
  readState.on("value", function(data){
    gameState = data.val();
  });
  if(gameState!="Hungry"){
    feed.hide;
    addfood.hide();
    feedDog.remove();
  }else{
    feed.show();
    addfood.show;
    feedDog.addImage(sadDog);
  }
  
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last fedd :"+lastfeed%12+"pm",350,30);
  }else if(lastfed ==0){
    text("last fedd : 12 am",350,30);
  }else{
    text("last fedd :"+lastfeed+"am",350,30);
  }
}

function update(state){
  database.ref('/').update({
    gameState:state
  })
}

function feeddog(){
  feedDog.addImage(happyDog);
  foodobj.updateFoodstock(foodobj.getFoodstock()-1);
  database.ref('/').update({
    food:foodobj.getFoodstock(),
    foodtime:hour()
  })
}
function adddog(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}




