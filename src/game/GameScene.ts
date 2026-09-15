import Phaser from 'phaser';
import { Player } from './Player';
import { Obstacle } from './Obstacle';
import { Dinosaur } from './Dinosaur';

export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create(): void {
    // Sky
    this.add.rectangle(400, 300, 800, 600, 0x87ceeb);

    // Ground
    const ground = this.add.rectangle(400, 400, 800, 100, 0x6b8e23);
    this.physics.add.existing(ground, true);

    // Player
    const player = new Player(this, 250, 315);

    // Jump
    this.input.keyboard?.on('keydown-SPACE', () => {
      player.jump();
    });

  // Obstacle
  const obstacle = new Obstacle(this, 500, 330);

  // Dinosaur
  const dinosaur = new Dinosaur(this, 100, 315);

  // Collision
  this.physics.add.collider(player, ground);
  this.physics.add.collider(dinosaur, ground);
  this.physics.add.collider(obstacle, ground)

  // Title
  this.add
    .text(400, 150, 'DINO RUN', {
      fontSize: '48px',
    })
    .setOrigin(0.5);
  }
}