export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/img/star.png');
	}

	create() {
		this.star = this.add.image(100,250, 'star') //Add Image Params = x, y, key
		this.star.setScale(2); //Skaliert das Bild
		// console.log(this.star.originY); //Consolenausgabe mit originalgröße des Bildes
		this.star.setAlpha(1, 0.5, 0.5, 0.2); //Setzt die Helligkeit des Bildes. Lichteffekte möglich
	}
	update(time, delta) {}
}
