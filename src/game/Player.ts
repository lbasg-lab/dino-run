import Phaser from 'phaser';

export class Player extends Phaser.GameObjects.Rectangle {
  private readonly jumpVelocity = -500;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 40, 70, 0x8b4513);

    scene.add.existing(this);

    scene.physics.add.existing(this);

    const body = this.body as Phaser.Physics.Arcade.Body;

    body.setAllowGravity(true);
    body.setSize(40, 70);
    body.setOffset(0, 0);
    body.setCollideWorldBounds(true);
  }

  jump(): void {
    const body = this.body as Phaser.Physics.Arcade.Body;

    if (body.blocked.down) {
      body.setVelocityY(this.jumpVelocity);
    }
  }
}