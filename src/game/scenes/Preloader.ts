import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        this.setBackground();
        this.setProgressBar();
    }

    setBackground () {
        const background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background')
        const scaleX = this.cameras.main.width / background.width
        const scaleY = this.cameras.main.height / background.height
        const scale = Math.max(scaleX, scaleY)
        background.setScale(scale).setScrollFactor(0)
    }

    setProgressBar () {
        const barWidth = 250;
        const barHeight = 32;
        this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, barWidth, barHeight).setStrokeStyle(1, 0xffffff);

        const barPossisionX = this.cameras.main.width / 2 - (barWidth / 2);
        const barPossisionY = this.cameras.main.height / 2;
        const bar = this.add.rectangle(barPossisionX, barPossisionY, 0, 28, 0xffffff);

        this.load.on('progress', (progress: number) => {
            bar.width = barWidth * progress;
        });
    }

    preload ()
    {
        
    }

    create ()
    {
        //this.scene.start('MainGame');
    }
}
