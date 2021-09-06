import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuOverlayComponent } from './mobile-menu-overlay.component';

describe('MobileMenuOverlayComponent', () => {
  let component: MobileMenuOverlayComponent;
  let fixture: ComponentFixture<MobileMenuOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
