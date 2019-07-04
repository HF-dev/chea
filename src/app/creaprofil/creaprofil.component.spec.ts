import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaprofilComponent } from './creaprofil.component';

describe('CreaprofilComponent', () => {
  let component: CreaprofilComponent;
  let fixture: ComponentFixture<CreaprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
