import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { retroModeGuard } from './retro-mode-guard';

describe('retroModeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => retroModeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
