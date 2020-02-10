export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}
	preload() {
	    //IMAGE
		this.load.image('star', '/assets/sprites/star.png');

		//SPRITESHEET (single)
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});
	}

	create() {

	}
	update(time, delta) {

        //change Text constantly in update
        // this.gameTitle.setText('Street Fighter ' + this.version);
        // this.version += 1;
    }
}
