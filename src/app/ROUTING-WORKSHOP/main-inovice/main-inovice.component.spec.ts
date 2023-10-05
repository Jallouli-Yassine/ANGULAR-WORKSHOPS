import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInoviceComponent } from './main-inovice.component';

describe('MainInoviceComponent', () => {
  let component: MainInoviceComponent;
  let fixture: ComponentFixture<MainInoviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainInoviceComponent]
    });
    fixture = TestBed.createComponent(MainInoviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
