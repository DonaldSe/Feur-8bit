import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../services/game-state';

@Component({
  selector: 'app-retro-hud',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hud-retro">
      <div class="hud-item">
        <span class="hud-label">SCORE:</span>
        <span class="hud-value">{{ gameState.score().toString().padStart(6, '0') }}</span>
      </div>
      <div class="hud-item">
        <span class="hud-label">LIVES:</span>
        <span class="hud-value">
          @for (life of livesArray(); track $index) {
            <span class="heart">♥</span>
          }
        </span>
      </div>
      <div class="hud-item">
        <span class="hud-label">LEVEL:</span>
        <span class="hud-value">{{ gameState.level().toString().padStart(2, '0') }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./retro-hud.scss']
})
export class RetroHudComponent {
  gameState = inject(GameStateService);

  livesArray() {
    return Array(this.gameState.lives());
  }
}
