import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroGamingPage } from './retro-gaming-page';

describe('RetroGamingPage', () => {
  let component: RetroGamingPage;
  let fixture: ComponentFixture<RetroGamingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroGamingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroGamingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
