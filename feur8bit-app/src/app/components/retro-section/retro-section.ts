import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retro-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="retro-section" [class.animated]="animated">
      <h2 class="retro-title">{{ title }}</h2>
      <div class="retro-section-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./retro-section.scss']
})
export class RetroSectionComponent {
  @Input() title: string = '';
  @Input() animated: boolean = false;
}
