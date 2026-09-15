import Phaser from 'phaser';

export class Obstacle extends Phaser.GameObjects.Rectangle {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 50, 40, 0x808080);

    scene.add.existing(this);
    scene.physics.add.existing(this, true);

    const body = this.body as Phaser.Physics.Arcade.StaticBody;

    body.setSize(50, 40);
    body.setOffset(0, 0);
  }
}