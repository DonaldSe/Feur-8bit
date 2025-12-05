import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroHudComponent } from './retro-hud';

describe('RetroHudComponent', () => {
  let component: RetroHudComponent;
  let fixture: ComponentFixture<RetroHudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroHudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroHudComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
