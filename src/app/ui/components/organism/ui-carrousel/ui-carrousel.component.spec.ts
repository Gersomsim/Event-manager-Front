import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCarrouselComponent } from './ui-carrousel.component';

describe('UiCarrouselComponent', () => {
  let component: UiCarrouselComponent;
  let fixture: ComponentFixture<UiCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
