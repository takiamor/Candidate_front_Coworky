import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcampanyComponent } from './navbarcampany.component';

describe('NavbarcampanyComponent', () => {
  let component: NavbarcampanyComponent;
  let fixture: ComponentFixture<NavbarcampanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcampanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcampanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
