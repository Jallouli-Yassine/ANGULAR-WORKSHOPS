import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddDirectveComponent } from './user-add-directve.component';

describe('UserAddDirectveComponent', () => {
  let component: UserAddDirectveComponent;
  let fixture: ComponentFixture<UserAddDirectveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddDirectveComponent]
    });
    fixture = TestBed.createComponent(UserAddDirectveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
