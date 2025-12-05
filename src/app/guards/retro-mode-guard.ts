import { CanActivateFn } from '@angular/router';

export const retroModeGuard: CanActivateFn = (route, state) => {
  return true;
};
