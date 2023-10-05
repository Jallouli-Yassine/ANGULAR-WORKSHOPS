import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoviceListComponent } from './inovice-list.component';

describe('InoviceListComponent', () => {
  let component: InoviceListComponent;
  let fixture: ComponentFixture<InoviceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InoviceListComponent]
    });
    fixture = TestBed.createComponent(InoviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
