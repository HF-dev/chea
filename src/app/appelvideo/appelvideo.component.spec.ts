import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelvideoComponent } from './appelvideo.component';

describe('AppelvideoComponent', () => {
  let component: AppelvideoComponent;
  let fixture: ComponentFixture<AppelvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
