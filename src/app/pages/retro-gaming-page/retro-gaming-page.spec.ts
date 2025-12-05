import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroGamingPageComponent } from './retro-gaming-page';

describe('RetroGamingPageComponent', () => {
  let component: RetroGamingPageComponent;
  let fixture: ComponentFixture<RetroGamingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroGamingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroGamingPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
