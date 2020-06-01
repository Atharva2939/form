 class Player{
    
    constructor(){
        this.index=null;
        //this.distance=0;
        this.mail=null;
        this.ans1=null;
        this.ans2=null;
        this.ans3=null;
    }
    getCount(){
        console.log("hi");
        var playerCountref=database.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount=data.val();
            
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex1="players/player"+this.index;
        database.ref(playerIndex1).set({
            mail:this.mail,
            ans1:this.ans1,
            ans2:this.ans2,
            ans3:this.ans3
            //distance:this.distance
        })
    }
    // static getPlayerInfo(){
    //     var playerInfo=database.ref("players");
    //     playerInfo.on("value",(data)=>{
    //         allPlayers=data.val();
    //     })
    // }
}



 