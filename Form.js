class Form{
    constructor(){
        this.input=createInput("email");
        this.button=createButton("submit");
        this.radio=createRadio()
        this.radio.option("true")
        this.radio.option("false")
        this.radio2=createRadio();
        this.radio2.option("true")
        this.radio2.option("false")
        this.radio3=createRadio();
        this.radio3.option("100")
        this.radio3.option("200")
        this.radio3.option("300")
        this.question=createElement("h4")
        this.question1=createElement("h4")
        this.question2=createElement("h4")
        //this.greeting=createElement("h3");
        //this.title=createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
        //this.radio.hide();
    }
    display(){
     
        this.question.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.question.position(displayWidth/2-40,displayHeight/2-150);
        this.question1.html("Would you be willing to contribute a small amount every month for such a program?")
        this.question1.position(displayWidth/2-40,displayHeight/2-20)
        this.question2.html("How much per month would you be willing to pay?")
        this.question2.position(displayWidth/2-40,displayHeight/2+100)
        this.input.position(displayWidth/2-40,displayHeight/2-200);
       
        this.button.position(displayWidth/2+30,displayHeight/2+300);
        this.radio.position(displayWidth/2+30,displayHeight/2-70);
        this.radio2.position(displayWidth/2+30,displayHeight/2+40);
        this.radio3.position(displayWidth/2+30,displayHeight/2+180)
        //ans=this.radio.value();
        this.button.mousePressed(()=>{
            //this.input.hide();
            //this.button.hide();

            player.mail=this.input.value();
            player.ans1=this.radio.value();
            player.ans2=this.radio2.value();
            player.ans3=this.radio3.value()
            //player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            // this.greeting.html("hello"+player.name);
            // this.greeting.position(displayWidth/2-70,displayHeight/4)
        } )
    }
}