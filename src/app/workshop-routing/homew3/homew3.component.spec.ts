import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homew3Component } from './homew3.component';

describe('Homew3Component', () => {
  let component: Homew3Component;
  let fixture: ComponentFixture<Homew3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homew3Component]
    });
    fixture = TestBed.createComponent(Homew3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
