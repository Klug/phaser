export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
	    //IMAGE
		this.load.image('star', '/assets/img/star.png');

		//SPRITESHEET (single)
		this.load.spritesheet('dude', '/assets/img/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});

		//ATLAS (multi spritesheet)
        this.load.atlas({
            key: 'char_sprites',
            textureURL: '/assets/img/atlas_sprites/sprites.png',
            atlasURL: '/assets/img/atlas_sprites/sprites.json'
        });

        //TEXT - googleFonts
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
	}

	create() {
		// //IMAGE
		// this.star = this.add.image(100,250, 'star'); //Add Image Params = x, y, key
		// this.star.setScale(2); //Skaliert das Bild
		// // console.log(this.star.originY); //Consolenausgabe mit originalgröße des Bildes
		// this.star.setAlpha(1, 0.5, 0.5, 0.2); //Setzt die Helligkeit des Bildes. Lichteffekte möglich
        //
		// //SPRITESHEET
		// this.dude = this.add.sprite(200, 150, 'dude', 4).setScale(2);
		// //animation
		// this.anims.create({
		// 	key: 'left',
		// 	frames:
		// 		this.anims.generateFrameNumbers('dude', {
		// 			start: 0,
		// 			end: 3
		// 		}),
		// 	frameRate: 5,
		// 	repeat: -1
		// });
        // this.dude.anims.play('left', true);
        //
		// //SPRITE ATLAS
        // this.fatboy = this.add.sprite(100, 250, 'char_sprites', 'jacen1.png').setScale(2);
        // //animation
        // const frameNames = [
        //     { key: 'char_sprites', frame: 'jacen2.png' },
        //     { key: 'char_sprites', frame: 'jacen3.png' },
        //     { key: 'char_sprites', frame: 'jacen4.png' },
        //     { key: 'char_sprites', frame: 'jacen5.png' },
        // ];
        // this.anims.create({
        //     key: 'right',
        //     frames: frameNames,
        //     frameRate: 5,
        //     repeat: -1
        // });
        // //just pictures to the right. For running to the left. FLIP it
        // this.fatboy.flipX = true;
        // this.fatboy.anims.play('right', true);

        //SHAPES
        this.square = this.add.rectangle(100, 200, 150, 150, 0Xff0000);
        this.square.setStrokeStyle(0, 0Xff0000, 1);
        //circle
        this.circle = this.add.circle(100, 200, 50, 0Xffff00);
        this.circle.setStrokeStyle();

        //TEXT
        this.gameTitle = this.add.text(200, 200, 'Hey this is my Title',  {
            fonyFamily: 'Courier',
            fontSize: '30px',
            fontStyle: '',
            backgroundColor: null,
            color: '#fff',
            stroke: '#ff0',
            strokeThickness: 2,
            shadow: {
                offsetX: 3,
                offsetY: 3,
                color: '#fff',
                blur: 1,
                stroke: false,
                fill: true
            },
            align: 'center', //left/center/right
        });
        //googleFont
        WebFont.load({
            google: {
                families: ['Fredericka the Great']
            },
            active: () => {
                this.add
                    .text(150, 50, 'Google Font', {
                    fontFamily: 'Fredericka the Great',
                    fontSize: 50,
                    color: '#fff'
                })
                    .setShadow(2, 2, '#333', 2, false, true);
            }
        });
        //change Text constantly in update
        this.gameTitle.setText('Street Fighter ' + 2);
        this.version = 0;
	}
	update(time, delta) {

        //change Text constantly in update
        this.gameTitle.setText('Street Fighter ' + this.version);
        this.version += 1;
    }
}
