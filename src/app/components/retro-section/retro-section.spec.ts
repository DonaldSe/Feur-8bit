import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSectionComponent } from './retro-section';

describe('RetroSectionComponent', () => {
  let component: RetroSectionComponent;
  let fixture: ComponentFixture<RetroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
