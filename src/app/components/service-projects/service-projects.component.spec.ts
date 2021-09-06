import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProjectsComponent } from './service-projects.component';

describe('ServiceProjectsComponent', () => {
  let component: ServiceProjectsComponent;
  let fixture: ComponentFixture<ServiceProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
