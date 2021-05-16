class Form{
    constructor(){
        
    }
    display(){
        var title = createElement("h1")
        title.html("Car Racing")
        title.position(130,0)
        var input = createInput("name")
        input.position(130,160)
        var button = createButton("start")
        button.position(250,200)
        button.mousePressed(function(){
            button.hide()
            input.hide()
            var name = input.value()
            playerCount++
            player.updateInfo(name)
            player.updateCount(playerCount)
            var greeting = createElement("h2")
            greeting.html("Hello! "+ name)
            greeting.position(130,160)
        })
    }
}