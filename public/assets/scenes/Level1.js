export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/img/star.png');
		this.load.spritesheet('dude', '/assets/img/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});
	}

	create() {
		//IMAGE
		this.star = this.add.image(100,250, 'star'); //Add Image Params = x, y, key
		this.star.setScale(2); //Skaliert das Bild
		// console.log(this.star.originY); //Consolenausgabe mit originalgröße des Bildes
		this.star.setAlpha(1, 0.5, 0.5, 0.2); //Setzt die Helligkeit des Bildes. Lichteffekte möglich

		//SPRITESHEET
		this.dude = this.add.sprite(200, 150, 'dude', 4).setScale(2);
		//animation
		this.anims.create({
			key: 'left',
			frames:
				this.anims.generateFrameNumbers('dude', {
					start: 0,
					end: 3
				}),
			frameRate: 5,
			repeat: -1
		});

		this.dude.anims.play('left', true);
	}
	update(time, delta) {}
}
