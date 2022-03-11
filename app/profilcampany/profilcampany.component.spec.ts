import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilcampanyComponent } from './profilcampany.component';

describe('ProfilcampanyComponent', () => {
  let component: ProfilcampanyComponent;
  let fixture: ComponentFixture<ProfilcampanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilcampanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilcampanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
