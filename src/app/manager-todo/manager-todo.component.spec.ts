import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTodoComponent } from './manager-todo.component';

describe('ManagerTodoComponent', () => {
  let component: ManagerTodoComponent;
  let fixture: ComponentFixture<ManagerTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
