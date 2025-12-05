import { Routes } from '@angular/router';
import { RetroGamingPageComponent } from './pages/retro-gaming-page/retro-gaming-page';

export const routes: Routes = [
  { path: '', redirectTo: '/retro', pathMatch: 'full' },
  { path: 'retro', component: RetroGamingPageComponent },
  { path: '**', redirectTo: '/retro' }
];
