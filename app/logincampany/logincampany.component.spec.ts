import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincampanyComponent } from './logincampany.component';

describe('LogincampanyComponent', () => {
  let component: LogincampanyComponent;
  let fixture: ComponentFixture<LogincampanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincampanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincampanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
