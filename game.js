 ```javascript
 const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 400,
   scene: {
     create: create
   }
 };

 const game = new Phaser.Game(config);

 function create() {
   this.add.text(16, 16, 'Hello, PCMR!', { fontSize: '32px', fill: '#fff' });
 }