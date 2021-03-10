class Quiz {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }    
      async start(){
        if(gameState === 0){
          contestant1 = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value")
          if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val()
            contestant1.getCount();
          }
          question1 = new Question();
          question1.display();
        }
      }
      play(){
        background("yellow")
        textSize(18)
        fill("blue")
        text("Note :- The name of the contestant who gave the correct answer is highlited with green colour",80,230)
        
        Contestant.getinfo();
        if(allcontestants!==undefined){

            var place = 250
        for(var plr in allcontestants){
          var correctAns = "2"
          if (correctAns === allcontestants[plr].answer){
            fill("Green") 
          }
            else{
            fill ("red")
            }
         place = place + 20
         textSize(15)
         text(allcontestants[plr].name+":"+allcontestants[plr].answer,150,place)
        }
      }
    }
}