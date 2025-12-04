import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroHud } from './retro-hud';

describe('RetroHud', () => {
  let component: RetroHud;
  let fixture: ComponentFixture<RetroHud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroHud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroHud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
