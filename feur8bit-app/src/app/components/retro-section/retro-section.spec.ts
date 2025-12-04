import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSection } from './retro-section';

describe('RetroSection', () => {
  let component: RetroSection;
  let fixture: ComponentFixture<RetroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
