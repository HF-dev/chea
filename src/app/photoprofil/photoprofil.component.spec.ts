import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoprofilComponent } from './photoprofil.component';

describe('PhotoprofilComponent', () => {
  let component: PhotoprofilComponent;
  let fixture: ComponentFixture<PhotoprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
