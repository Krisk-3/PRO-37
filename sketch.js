var canvas;
var database;
var contestantCount;
var gameState = 0;
var quiz;
var contestant1;
var question1;
var allcontestants;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("cyan");

  if(contestantCount===4){
    quiz.update(1)
  }

  if(gameState===1){
    clear();
    quiz.play();
  }

  
}
