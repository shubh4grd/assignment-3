import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProjects2Component } from './service-projects2.component';

describe('ServiceProjects2Component', () => {
  let component: ServiceProjects2Component;
  let fixture: ComponentFixture<ServiceProjects2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProjects2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProjects2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
