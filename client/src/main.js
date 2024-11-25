import Phaser from "phaser";
import Game from "./scenes/game";


const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: [
        Game,
    ]
};

export default new Phaser.Game(config);
