class Form
{
    constructor()
    {
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }

    hide()
    {
      this.greeting.hide()
      this.button.hide()
      this.input.hide()
    }

    display()
    {
        var title = createElement('h1');
        title.html("CAR RACER GAME");
        title.position(500,20);

        this.input.position(560,160);

        this.button.position(620,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Welcome To Car Racer Game "+player.name);
            this.greeting.position(480,160);
        })
    }
}