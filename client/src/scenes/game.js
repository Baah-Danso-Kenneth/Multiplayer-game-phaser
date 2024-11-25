import UIHandler from "../helpers/ui-handler"

export default class Game extends Phaser.Scene{
    constructor(){
        super({key: 'Game-Scene'})
    }

    preload(){}

    create(){
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
    }

    update(){}
}