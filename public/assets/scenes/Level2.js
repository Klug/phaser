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
		// this.dude = this.add.sprite(100, 200, 'dude').setInteractive().setDepth(2);

		this.star = this.add.sprite(500, 200, 'star').setScale(8, 8).setInteractive().setDepth(1);

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
		//disable right click
		this.input.mouse.disableContextMenu();

		//listener on every mouseclick
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

		// 'dude' drag and drop
		// this.dude.on('dragstart', (pointer, dragX, dragY) => {
		// 	console.log('Drag start');
		// });
		//
		// this.dude.on('drag', (pointer, dragX, dragY) => {
		// 	console.log('Drag atm');
		// 	this.dude.setX(dragX);
		// 	this.dude.setY(dragY);
		// });
		// this.dude.on('dragend', (pointer, dragX, dragY) => {
		// 	console.log('Drag end');
		// });

		//dragzone on Star
		// this.input.on('dragenter', (pointer, gameObject, dropZone) => {
		// 	dropZone.setTint(0x00FF00);
		// });
		// this.input.on('dragleave', (pointer, gameObject, dropZone) => {
		// 	dropZone.clearTint();
		// });
		// this.input.on('drop', (pointer, gameObject, dropZone) => {
		// 	gameObject.x = dropZone.x;
		// 	gameObject.y = dropZone.y;
		// 	dropZone.clearTint();
		// });

		//Physics
		//add sprite to physics
		// this.physics.add.existing(this.dude, 0); //1=static; 0=dynamic(react to world) -> contra not working with setMass
		// this.dude.body.setMass(25); //workaround

		this.player1 = this.physics.add.sprite(100, 0, 'dude').setScale(3,3).setOrigin(0, 0).setOffset(0, 8);
		this.player1.setSize(this.player1.body.width - 2, this.player1.body.height - 5, false);
		console.log(this.player1);

		this.player2 = this.physics.add.sprite(250, 0, 'dude');
		this.player2.setMass(25);

		//World bound
		this.physics.world.setBoundsCollision();
		this.player1.setCollideWorldBounds(true); //hold player 1 ingame
		this.physics.world.setBounds(300, 0, 400, 300);
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
