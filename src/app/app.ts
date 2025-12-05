import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GameState {
  score: number;
  lives: number;
  level: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="retro-gaming-page">

      <!-- HUD -->
      <div class="hud-retro">
        <div class="hud-item">
          <span class="hud-label">SCORE:</span>
          <span class="hud-value">{{ gameState().score.toString().padStart(6, '0') }}</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">LIVES:</span>
          <span class="hud-value">
            @for (life of getLivesArray(); track $index) {
              <span class="heart">♥</span>
            }
          </span>
        </div>
        <div class="hud-item">
          <span class="hud-label">LEVEL:</span>
          <span class="hud-value">{{ gameState().level.toString().padStart(2, '0') }}</span>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="retro-content" [class.show]="showContent()">

        <!-- Header -->
        <div class="retro-header">
          <h1 class="glitch-text">👾 PROJET NIRD - VERSION RÉTRO 👾</h1>
          <p class="subtitle blink">
            Bienvenue sur la version rétro-gaming de notre application<br>
            réalisée pour la Nuit de l'Info 2025
          </p>
          <div class="divider">═══════════════════════════════════════</div>
        </div>

        <!-- Section: Le concept -->
        <div class="retro-section animated">
          <h2 class="retro-title">🎯 LE CONCEPT</h2>
          <div class="retro-section-content">
            <p class="pixel-text">
              Face au géant numérique <span class="enemy">GOLIATH</span>,
              l'École peut devenir un village <span class="hero">ASTÉRIX</span> :
              ingénieux, autonome et créateur d'un avenir numérique libre.
            </p>
            <p class="pixel-text">
              C'est l'ambition de la démarche <strong>NIRD</strong> (Numérique Inclusif,
              Responsable et Durable) : permettre aux établissements scolaires
              d'adopter un <span class="highlight">Numérique Inclusif, Responsable et Durable</span>.
            </p>
            <div class="quest-box">
              <span class="quest-icon">⚔️</span>
              <span>QUÊTE PRINCIPALE : Réduire les dépendances numériques</span>
            </div>
          </div>
        </div>

        <!-- Section: Objectifs -->
        <div class="retro-section">
          <h2 class="retro-title">🎮 OBJECTIFS DE LA MISSION</h2>
          <div class="retro-section-content">
            <ul class="retro-list">
              <li><span class="bullet">▶</span>Développer une plateforme gamifiée pour animer et encourager la contribution NIRD</li>
              <li><span class="bullet">▶</span>Faciliter la contribution au sein de la communauté</li>
              <li><span class="bullet">▶</span>Mettre en valeur les solutions proposées par la démarche NIRD</li>
              <li><span class="bullet">▶</span>Proposer une expérience ludique, attractive et engageante</li>
            </ul>

            <div class="power-up-box">
              <span class="power-icon">⭐</span>
              <div>
                <strong>POWER-UP REQUIS :</strong>
                <p>Outil interactif : mini-site narratif, plateforme explicative, tableau de simulation, interface gamifiée...</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Les acteurs -->
        <div class="retro-section">
          <h2 class="retro-title">👥 LES JOUEURS DU PROJET</h2>
          <div class="retro-section-content">
            <div class="character-grid">
              <div class="character-card">
                <div class="character-sprite">🎓</div>
                <div class="character-name">ÉLÈVES & ÉCO-DÉLÉGUÉS</div>
              </div>
              <div class="character-card">
                <div class="character-sprite">👨‍🏫</div>
                <div class="character-name">ENSEIGNANTS</div>
              </div>
              <div class="character-card">
                <div class="character-sprite">🏛️</div>
                <div class="character-name">DIRECTIONS</div>
              </div>
              <div class="character-card">
                <div class="character-sprite">⚙️</div>
                <div class="character-name">TECHNICIENS RÉSEAU</div>
              </div>
            </div>

            <p class="pixel-text centered">
              Ensemble, ces acteurs transforment les pratiques pour construire un numérique éducatif plus autonome, durable et éthique.
            </p>
          </div>
        </div>

        <!-- Section: Activités -->
        <div class="retro-section">
          <h2 class="retro-title">🕹️ ACTIVITÉS & COMPÉTENCES</h2>
          <div class="retro-section-content">
            <div class="skills-grid">
              <div class="skill-item">
                <span class="skill-icon">🐧</span>
                <span>Promouvoir l'usage de <strong>Linux</strong></span>
              </div>
              <div class="skill-item">
                <span class="skill-icon">♻️</span>
                <span>Encourager le <strong>réemploi</strong> du matériel</span>
              </div>
              <div class="skill-item">
                <span class="skill-icon">🔓</span>
                <span>Mutualiser les <strong>ressources libres</strong></span>
              </div>
              <div class="skill-item">
                <span class="skill-icon">🏗️</span>
                <span>Favoriser la <strong>co-construction</strong></span>
              </div>
            </div>

            <div class="boss-banner">
              <span class="boss-icon">👾</span>
              <span>BOSS FINAL : L'EMPIRE NUMÉRIQUE</span>
              <span class="boss-icon">👾</span>
            </div>
          </div>
        </div>

        <!-- Section: Ressources -->
        <div class="retro-section">
          <h2 class="retro-title">📚 RESSOURCES & LIENS</h2>
          <div class="retro-section-content">
            <div class="link-box">
              <p>
                <span class="link-icon">🔗</span>
                Site officiel NIRD :
                <a href="https://nird.forge.apps.education.fr/" target="_blank" class="retro-link">
                  nird.forge.apps.education.fr
                </a>
              </p>
            </div>

            <p class="info-text">
              Le projet NIRD est né au lycée Carnot de Bruay-la-Buissière (Hauts-de-France).
              La démarche cherche à étendre ce numérique émancipateur à tous les établissements scolaires.
            </p>
          </div>
        </div>

        <!-- Bouton final -->
        <div class="action-zone">
          <button class="retro-button" (click)="startGame()">
            <span class="button-text">▶ START MISSION ◀</span>
          </button>

          <p class="credits" (click)="easterEgg()">
            Made with 💚Feur for Nuit de l'Info 2025<br>
            IUTLCO - Département Informatique
          </p>
        </div>

      </div>

      <!-- Effets -->
      <div class="scanlines"></div>
      <div class="crt-border"></div>

    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    @font-face {
      font-family: 'PixelFont';
      src: local('Courier New'), local('Consolas'), local('Monaco');
      font-weight: normal;
      font-style: normal;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .retro-gaming-page,
    .retro-gaming-page * {
      font-family: 'Press Start 2P', 'PixelFont', 'Courier New', monospace !important;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }

    .retro-gaming-page {
      background: #0a0a1f;
      background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px);
      color: #f8f8f8;
      min-height: 100vh;
      padding: 16px;
      position: relative;
      overflow-x: hidden;
    }

    .retro-gaming-page::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
      pointer-events: none;
      z-index: 1;
    }

    .scanlines {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      background: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 3px);
      animation: scanline-move 8s linear infinite;
    }

    @keyframes scanline-move {
      0% { transform: translateY(0); }
      100% { transform: translateY(4px); }
    }

    .crt-border {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9998;
      border: 20px solid rgba(0, 0, 0, 0.8);
      border-radius: 10px;
      box-shadow: inset 0 0 50px rgba(0, 255, 0, 0.1), inset 0 0 100px rgba(0, 0, 0, 0.5);
    }

    .hud-retro {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #000022;
      border: 4px solid #f8f8f8;
      padding: 12px 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 10px;
      font-weight: normal;
      margin-bottom: 16px;
      box-shadow: 0 4px 0 rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.3);
    }

    .hud-retro::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shine 3s infinite;
    }

    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }

    .hud-item {
      display: flex;
      align-items: center;
      gap: 8px;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
    }

    .hud-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .hud-value {
      color: #00ff00;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8), 0 0 10px currentColor;
      animation: flicker 3s infinite;
    }

    @keyframes flicker {
      0%, 100% { opacity: 1; }
      95%, 97% { opacity: 0.8; }
    }

    .heart {
      color: #ff0066;
      font-size: 14px;
      display: inline-block;
      animation: heartbeat 1.5s infinite;
      text-shadow: 0 0 5px #ff0066, 0 0 10px #ff0066;
    }

    .heart:not(:last-child) {
      margin-right: 4px;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      10% { transform: scale(1.1); }
      20% { transform: scale(1); }
    }

    .retro-content {
      border: 4px solid #00ff00;
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      padding: 24px;
      background: rgba(10, 10, 40, 0.95);
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.5s ease;
    }

    .retro-content.show {
      opacity: 1;
      transform: translateY(0);
    }

    .retro-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .retro-header h1 {
      font-size: 16px;
      margin: 0 0 20px 0;
      color: #00ff00;
      text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.8), 0 0 10px #00ff00, 0 0 20px #00ff00;
      letter-spacing: 2px;
      text-transform: uppercase;
      line-height: 1.6;
    }

    .glitch-text {
      animation: glitch 3s infinite;
    }

    @keyframes glitch {
      0%, 90%, 100% { transform: translate(0); }
      92% { transform: translate(-2px, 2px); }
      94% { transform: translate(2px, -2px); }
      96% { transform: translate(-2px, -2px); }
      98% { transform: translate(2px, 2px); }
    }

    .subtitle {
      font-size: 8px;
      color: #00ffff;
      margin: 0 0 16px 0;
      line-height: 1.8;
    }

    .blink {
      animation: blink 2s infinite;
    }

    @keyframes blink {
      0%, 49%, 100% { opacity: 1; }
      50%, 99% { opacity: 0.3; }
    }

    .divider {
      color: #ff00ff;
      font-size: 8px;
      margin: 16px 0;
      opacity: 0.6;
    }

    .retro-section {
      margin: 24px 0;
      padding: 16px;
      border: 3px solid #00ffff;
      background: rgba(0, 0, 0, 0.3);
      position: relative;
      box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.1), 0 0 15px rgba(0, 255, 255, 0.2);
    }

    .retro-section::before,
    .retro-section::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border: 3px solid #00ffff;
    }

    .retro-section::before {
      top: -3px;
      left: -3px;
      border-right: none;
      border-bottom: none;
    }

    .retro-section::after {
      top: -3px;
      right: -3px;
      border-left: none;
      border-bottom: none;
    }

    .retro-section.animated {
      animation: section-enter 0.5s ease;
    }

    @keyframes section-enter {
      0% {
        opacity: 0;
        transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .retro-title {
      font-size: 12px;
      color: #ffff00;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid rgba(255, 255, 0, 0.3);
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8), 0 0 15px currentColor;
      position: relative;
      line-height: 1.6;
    }

    .retro-title::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 0;
      background: #ffff00;
      box-shadow: 0 0 10px #ffff00;
      animation: title-line 2s ease-out forwards;
    }

    @keyframes title-line {
      to { width: 100%; }
    }

    .retro-section-content {
      position: relative;
      z-index: 1;
    }

    .retro-section:hover {
      border-color: #33ffff;
      box-shadow: inset 0 0 30px rgba(0, 255, 255, 0.15), 0 0 25px rgba(0, 255, 255, 0.3);
    }

    .pixel-text {
      line-height: 2;
      margin: 12px 0;
      font-size: 8px;
    }

    .pixel-text .enemy {
      color: #ff0000;
      font-weight: bold;
      text-shadow: 0 0 10px #ff0000;
    }

    .pixel-text .hero {
      color: #00ff00;
      font-weight: bold;
      text-shadow: 0 0 10px #00ff00;
    }

    .pixel-text .highlight {
      color: #ffff00;
      font-weight: bold;
    }

    .pixel-text.centered {
      text-align: center;
    }

    .quest-box, .power-up-box {
      border: 2px solid #00ffff;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      padding: 12px;
      margin: 16px 0;
      background: rgba(0, 255, 255, 0.05);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 8px;
      line-height: 1.8;
    }

    .quest-icon, .power-icon {
      font-size: 20px;
      animation: float 2s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    .retro-list {
      list-style: none;
      padding: 0;
      margin: 16px 0;
    }

    .retro-list li {
      margin: 12px 0;
      padding-left: 20px;
      position: relative;
      line-height: 2;
      font-size: 8px;
    }

    .retro-list .bullet {
      position: absolute;
      left: 0;
      color: #00ff00;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .character-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      margin: 16px 0;
    }

    .character-card {
      border: 2px solid #ffffff;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      padding: 16px;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    }

    .character-card:hover {
      transform: scale(1.05);
      background: rgba(0, 255, 0, 0.1);
      border-color: #00ff00;
    }

    .character-sprite {
      font-size: 32px;
      margin-bottom: 8px;
    }

    .character-name {
      font-size: 8px;
      color: #00ffff;
      font-weight: bold;
      line-height: 1.6;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
      margin: 16px 0;
    }

    .skill-item {
      border: 2px solid #ffff00;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      padding: 12px;
      background: rgba(255, 255, 0, 0.05);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 8px;
      line-height: 1.8;
    }

    .skill-icon {
      font-size: 20px;
    }

    .boss-banner {
      border: 3px solid #ff0000;
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      padding: 16px;
      margin: 24px 0;
      background: rgba(255, 0, 0, 0.1);
      text-align: center;
      font-weight: bold;
      font-size: 10px;
      color: #ff0000;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8), 0 0 10px #ff0000, 0 0 20px #ff0000;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      animation: boss-flash 2s infinite;
      line-height: 1.6;
    }

    @keyframes boss-flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .boss-icon {
      font-size: 24px;
      animation: bounce 1s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .link-box {
      border: 2px solid #ff00ff;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      padding: 12px;
      margin: 16px 0;
      background: rgba(255, 0, 255, 0.05);
      font-size: 8px;
      line-height: 1.8;
    }

    .link-icon {
      color: #ff00ff;
      margin-right: 8px;
    }

    .retro-link {
      color: #00ffff;
      text-decoration: none;
      border-bottom: 1px dotted #00ffff;
      transition: all 0.3s ease;
    }

    .retro-link:hover {
      color: #00ff00;
      border-bottom-color: #00ff00;
      text-shadow: 0 0 10px #00ff00;
    }

    .info-text {
      font-size: 8px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 2;
      margin: 12px 0;
    }

    .action-zone {
      text-align: center;
      margin-top: 32px;
    }

    .retro-button {
      border: 4px solid #ffffff;
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2), 6px 6px 0 rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.5);
      padding: 16px 32px;
      background: #ff0000;
      color: #f8f8f8;
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.2s ease;
      line-height: 1.6;
    }

    .retro-button:hover {
      background: #ff3333;
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2), 6px 6px 0 rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.8);
      transform: translateY(-2px);
    }

    .retro-button:active {
      transform: translate(6px, 6px);
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 0 rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.5);
    }

    .button-text {
      display: inline-block;
      animation: button-pulse 1.5s infinite;
    }

    @keyframes button-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .credits {
      margin-top: 24px;
      font-size: 8px;
      color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: color 0.3s ease;
      line-height: 1.8;
    }

    .credits:hover {
      color: #00ff00;
    }

    @media (max-width: 768px) {
      .retro-gaming-page {
        padding: 8px;
      }
      .retro-content {
        padding: 16px;
      }
      .retro-header h1 {
        font-size: 12px;
      }
      .character-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .skills-grid {
        grid-template-columns: 1fr;
      }
      .hud-retro {
        gap: 12px;
        font-size: 8px;
      }
    }
  `]
})
export class App implements OnInit {
  protected readonly title = signal('feur8bit-app');
  protected gameState = signal<GameState>({
    score: 1250,
    lives: 3,
    level: 1
  });
  protected showContent = signal(false);

  ngOnInit() {
    setTimeout(() => {
      this.showContent.set(true);
      this.addScore(100);
    }, 500);
  }

  getLivesArray(): number[] {
    return Array(this.gameState().lives).fill(0);
  }

  addScore(points: number) {
    this.gameState.update(state => ({
      ...state,
      score: state.score + points
    }));
  }

  startGame() {
    this.addScore(500);
    this.gameState.update(state => ({
      ...state,
      level: state.level + 1
    }));
    alert('🎮 Découvrez le projet NIRD - Numérique Inclusif, Responsable et Durable !');
  }

  easterEgg() {
    this.addScore(1000);
    this.gameState.update(state => ({
      ...state,
      lives: Math.min(5, state.lives + 1)
    }));
  }
}
