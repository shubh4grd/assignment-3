import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesIconComponent } from './features-icon.component';

describe('FeaturesIconComponent', () => {
  let component: FeaturesIconComponent;
  let fixture: ComponentFixture<FeaturesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
