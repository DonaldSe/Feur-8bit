import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  score = signal(1250);
  lives = signal(3);
  level = signal(1);

  addScore(points: number) {
    this.score.update(s => s + points);
  }

  loseLife() {
    this.lives.update(l => Math.max(0, l - 1));
  }

  gainLife() {
    this.lives.update(l => Math.min(5, l + 1));
  }

  nextLevel() {
    this.level.update(l => l + 1);
  }

  resetGame() {
    this.score.set(0);
    this.lives.set(3);
    this.level.set(1);
  }
}
