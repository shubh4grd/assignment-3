import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLogoSliderComponent } from './brand-logo-slider.component';

describe('BrandLogoSliderComponent', () => {
  let component: BrandLogoSliderComponent;
  let fixture: ComponentFixture<BrandLogoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandLogoSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandLogoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
