class Player {
    constructor(){

    }

    //read the playerCount value from database
    getCount(){
        database.ref("PlayerCount").on("value",function(data){
            playerCount = data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

     //write the player name value to the database
     updateInfo(name){
        database.ref("player"+playerCount).update({
            name:name
        })
    }
}