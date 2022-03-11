import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcandidateComponent } from './navbarcandidate.component';

describe('NavbarcandidateComponent', () => {
  let component: NavbarcandidateComponent;
  let fixture: ComponentFixture<NavbarcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
