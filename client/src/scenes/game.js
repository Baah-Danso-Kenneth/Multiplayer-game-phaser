import UIHandler from "../helpers/ui-handler"
import GameHandler from "../helpers/game-handler";
import SocketHandler from "../helpers/socket-handler";
import CardHandler from "../helpers/card-handler";
import DeckHandler from "../helpers/deck-handler";
import InteractiveHandler from "../helpers/interactive-handler";


export default class Game extends Phaser.Scene{
    constructor(){
        super({key: 'Game-Scene'})
    }

    preload() {

        this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
        this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
        this.load.image('cyanBoolean', 'src/assets/Cyan_Boolean3x.png');
        this.load.image('magentaBoolean', 'src/assets/Magenta_Boolean3x.png');
        this.load.image('cyanPing', 'src/assets/Cyan_Ping3x.png');
        this.load.image('magentaPing', 'src/assets/Magenta_Ping3x.png');
        
    }

    create(){
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler()
        this.SocketHandler = new SocketHandler()
        this.GameHandler = new GameHandler()
        this.InteractiveHandler = new InteractiveHandler()
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
    }

    update(){}
}