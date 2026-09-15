import Phaser from 'phaser';

export class Dinosaur extends Phaser.GameObjects.Rectangle {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 80, 60, 0x556b2f);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    const body = this.body as Phaser.Physics.Arcade.Body;

    body.setAllowGravity(true);
    body.setSize(80, 60);
    body.setOffset(0, 0);
    body.setCollideWorldBounds(true);
  }
}