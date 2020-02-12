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
		this.dude = this.add.sprite(100, 200, 'dude').setInteractive();

		//Keyboard INPUT
		// this.input.enabled = true;
		// this.wKey = this.input.keyboard.addKey('W');
		// this.aKey = this.input.keyboard.addKey('A');
		// this.sKey = this.input.keyboard.addKey('S');
		// this.dKey = this.input.keyboard.addKey('D');
		// this.spacebarKey = this.input.keyboard.addKey('SPACE');

		//Pfeiltasten
		// this.cursorKeys = this.input.keyboard.createCursorKeys();

		//Mouse
		this.input.mouse.disableContextMenu();

		//listiner on every mouseclick
		// this.input.on('pointerdown', pointer => {
		// 	if(pointer.rightButtonDown()){
		// 		this.dude.setX(pointer.y);
		// 		this.dude.setY(pointer.x);
		// 	} else {
		// 		this.dude.setX(pointer.x);
		// 		this.dude.setY(pointer.y);
		// 	}
		// 	console.log(pointer);
		// });
		//console log good to see, whats inside
		// console.log(this.cursorKeys.up);

		//'dude' moves, if u click on it
		// this.dude.on('pointerdown', (pointer) => {
		// 	this.dude.setX(this.dude.x + 50);
		// });

		//'dude' is moving, if hovering with mouse
		// this.dude.on('pointerover', () => {
		// 	// this.dude.setX(this.dude.x + 50);
		// });


	}

	update(time, delta) {
		//Keyboard
		// if (this.dude.x >= 0 && this.dude.y >= 0) {
		// 	if (this.wKey.isDown || this.cursorKeys.up.isDown) {
		// 		this.dude.setY(this.dude.y - 2); //this.dude.y -> y position of 'dude'
		// 	}
		// 	if (this.sKey.isDown || this.cursorKeys.down.isDown) {
		// 		this.dude.setY(this.dude.y + 2);
		// 	}
		// 	if (this.aKey.isDown || this.cursorKeys.left.isDown) {
		// 		this.dude.setX(this.dude.x - 2); //this.dude.x -> x position of 'dude'
		// 	}
		// 	if (this.dKey.isDown || this.cursorKeys.right.isDown) {
		// 		this.dude.setX(this.dude.x + 2);
		// 	}
		// 	//just press it once
		// 	if (Phaser.Input.Keyboard.JustDown(this.spacebarKey)) {
		// 		this.dude.setY(this.dude.y - 50);
		// 	}
		// } else {
		// 	this.dude.setX(this.dude.x + 2);
		// 	this.dude.setY(this.dude.y + 2);
		// }

		//Mouse
    }
}
