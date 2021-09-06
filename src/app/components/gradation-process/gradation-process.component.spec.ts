import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradationProcessComponent } from './gradation-process.component';

describe('GradationProcessComponent', () => {
  let component: GradationProcessComponent;
  let fixture: ComponentFixture<GradationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradationProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
