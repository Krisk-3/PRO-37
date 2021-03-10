class Question {
    constructor(){
        this.title = createElement('h1')
        this.input = createInput("Name");
        this.input1 = createInput("answer");
        this.button = createButton('Submit');
        this.question1 = createElement('h2');
        this.option = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
     }
     hide(){
         
     }
     
     display(){

      this.title.html("My Quiz Game");
      this.title.position(350, 0);
       
       this.question1.html("Question :- What is the national flower of Japan? ")
       this.question1.position(50,80);
       this.option.html("1: Jasmine");
       this.option.position(150,100);
       this.option1.html("2: Cherry Blossom")
       this.option1.position(150,120);
       this.option2.html("3: Ume flower")
       this.option2.position(150,140);
       this.option3.html("4: Kaneshon flower")
       this.option3.position(150,160);
       
       this.input.position(150, 230);
       this.input1.position(430, 230);

       this.button.position(350, 230);
   
       this.button.mousePressed(()=>{
         this.title.hide();
         this.input.hide();
         this.input1.hide();
         this.button.hide();
         contestant1.name = this.input.value();
         contestant1.answer = this.input1.value();
         contestantCount+=1;
         contestant1.index=contestantCount;
         contestant1.update();
         contestant1.updateCount(contestantCount);
       });
   
     }
     
   
   
   
   
   
   }
   