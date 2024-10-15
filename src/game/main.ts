import { Boot } from './scenes/Boot';
import { MainGame } from './scenes/MainGame';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { SpinePlugin } from "@esotericsoftware/spine-phaser"

const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 768,
    height: 1024,
    backgroundColor: "#2d7c45",
    min: {
        width: 480,
        height: 720,
    },
    max: {
        width: 1024,
        height: 1280,
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'game-container',
    scene: [
        Boot,
        Preloader,
        MainGame,
    ],
    plugins: {
        scene: [{
            key: "spine.SpinePlugin",
            plugin: SpinePlugin,
            mapping: "spine"
        }]
    }
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
