import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetroHudComponent } from '../../components/retro-hud/retro-hud';
import { RetroSectionComponent } from '../../components/retro-section/retro-section';
import { GameStateService } from '../../services/game-state';

@Component({
  selector: 'app-retro-gaming-page',
  standalone: true,
  imports: [CommonModule, RetroHudComponent, RetroSectionComponent],
  templateUrl: './retro-gaming-page.html',
  styleUrls: ['./retro-gaming-page.scss']
})
export class RetroGamingPageComponent implements OnInit {
  gameState = inject(GameStateService);
  showContent = false;

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
      this.gameState.addScore(100);
    }, 500);
  }

  startGame() {
    this.gameState.addScore(500);
    this.gameState.nextLevel();
    alert('🎮 Découvrez le projet NIRD - Numérique Inclusif, Responsable et Durable !');
  }

  easterEgg() {
    this.gameState.addScore(1000);
    this.gameState.gainLife();
  }
}
