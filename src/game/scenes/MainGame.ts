import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainGame extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;

    constructor ()
    {
        super('MainGame');
    }

    preload ()
    {
        this.load.spineBinary('skeleton-data', 'assets/animation/spineboy-ess.skel');
        this.load.spineAtlas('skeleton-atlas', 'assets/animation/spineboy-pma.atlas');
    }

    create ()
    {
        const spineObject = this.add.spine(400, 500, "skeleton-data", "skeleton-atlas");
        spineObject.animationState.setAnimation(0, "run", true);

        EventBus.emit('current-scene-ready', this);
    }
}
