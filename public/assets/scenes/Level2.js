export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}

	preload() {
	    //IMAGE
		this.load.image('star', '/assets/sprites/star.png');
		this.load.image('bomb', '/assets/sprites/bomb.png');

		//SPRITESHEET (single)
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});

		//Shoeboxkid
		this.load.atlas('shoeboxkid', '/assets/sprites/shoeboxkid/shoeboxkid.png', '/assets/sprites/shoeboxkid/shoeboxkid.json');

		//Audio
		this.load.audio('bgmusic', ['/assets/audio/first-audio.ogg']);
		this.load.audio('coinsound', ['/assets/audio/sfx_coin_double4.wav']);

	}

	create() {
		// this.dude = this.add.sprite(100, 200, 'dude').setInteractive().setDepth(2);
		// this.star = this.add.sprite(500, 200, 'star').setScale(8, 8).setInteractive().setDepth(1);
		this.bomb = this.add.sprite(600, 300, 'bomb').setScale(3, 3).setInteractive();

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

		//add dude inline to Physics
		this.player1 = this.physics.add.sprite(200, 100, 'dude').setScale(3,3).setOrigin(0, 0).setOffset(0, 8);
		this.player1.setSize(this.player1.body.width - 2, this.player1.body.height - 5, false);
		// console.log(this.player1);

		this.player2 = this.physics.add.sprite(50, 300, 'dude').setInteractive();

		//World bound
		this.physics.world.setBoundsCollision();
		this.player1.setCollideWorldBounds(true); //hold player 1 ingame
		this.player2.setCollideWorldBounds(true);
		// this.physics.world.setBounds(0, 0, this.game.config.width, this.game.config.height); //set the world manuel

		//collider between player 1 and 2
		// this.physics.add.collider(this.player1, this.player2, () => {
		// 	console.log('scored a point');
		// });

		//player1/2 can overlap
		// this.physics.add.overlap(this.player1, this.player2, () => {
		// 	console.log('scored a point');
		// });
		//
		// this.player1.setImmovable();
		// console.log(this.player1.body.blocked); //console log to see wich side is blocked
		// console.log(this.player1.body.touching); //to see which side player2 is touching player1

		//tweens
		this.bomb.on('pointerdown', () => {
			this.dudeAnimation();
		});

		this.player2.on('pointerdown', () => {
			if(this.tween.isPlaying()){
				this.tween.pause();
			} else {
				this.tween.resume();
			}
		});

		//shoeboxkid
		this.kid = this.add.sprite(300, 150, 'shoeboxkid', 'shoeboxkid_01.png').setScale(4);
		this.anims.create({
			key: 'walk',
			repeat: -1,
			frameRate: 10,
			frames: this.anims.generateFrameNames('shoeboxkid',{
				prefix: 'shoeboxkid_run',
				suffix: '.png',
				start: 1,
				end: 3,
				zeroPad: 2
			})
		});
		this.kid.play('walk');

		//Audio
		this.bgmusic = this.sound.add('bgmusic', {
			mute: false,
			volume: 1,
			rate: 0,
			detune: 1100,
			seec: 30,
			loop: true,
			delay: 0
		});
		 //this.bgmusic. = play, stop, pause, resume, setMute(true), setVolume(0-1), setDetune(-100--1000)=>slower, setLoop(true)
		// this.bgmusic.play();
	}

	dudeAnimation() {
		//tweens => object animation from a to b like a bullet
		// this.tween = this.tweens.add({
		// 	targets: this.player1,
		// 	x: 200, //'+=100'
		// 	y: '-=150', //'+=100'
		// 	// angle: 180, //rotate
		// 	// alpha: 0, //visibility
		// 	// scaleX: 1,
		// 	// scaleY: 1,
		// 	ease: 'Linear', //'Cubic', 'Elastic', 'Bounce', 'Back'...
		// 	duration: 1000,
		// 	repeat: -1, //or loop: -1
		// 	// delay: 2500,
		// 	yoyo: true
		// });

		this.player1Timeline = this.tweens.timeline({
			targets: this.player1,
			ease: 'Linear',
			duration: 1000,
			loop: 0,
			tweens: [
				{
					targets: this.player1,
					x: 0,
					y: 0,
					duration: 5000,
				},
				{
					targets: this.player1,
					x: 600,
					y: 0,
				},
				{
					targets: this.player1,
					x: 600,
					y: 300,
				},
				{
					targets: this.player1,
					x: 0,
					y: 300,
				},

			]
		});
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

		//check if player1 died by reaching the world down collision
		// if(this.player1.body.blocked.down) {
		// 	console.log('DIED');
		// }

		//check if player2 fell on player1
		// if(this.player1.body.touching.up) {
		// 	console.log('player2 fell on player1');
		// }
    }
}
