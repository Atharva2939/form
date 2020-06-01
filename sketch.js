//var ball;
var database;
var gameState=0;
var playerCount=0;
var player,game,form;
var allPlayers;
var car1,car2,car3,car4;
var cars;
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
//     var readName=database.ref("mail");
// readName.on("value",update);
//     game=new Game();
//     game.getState();
player=new Player()
player.getCount();
form=new Form();
form.display();
//     game.start();
}

function draw(){
    background("white");
    //  if(playerCount===1)
    //  game.update(1);
    //  if(gameState===1){
    //      clear();
    //      game.play();

    // }
}
// function update(mail){

//     database.ref(mail).set({
//         mail:form.mail
//     })


