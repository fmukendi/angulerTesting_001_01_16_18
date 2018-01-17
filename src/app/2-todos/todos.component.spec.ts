

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    let service = TestBed.get(TodoService);
    //  fixture.DebugElement.injector.get(TodoService)
    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));

    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  });

  it('should load todos from the server', async(() => {
    let service = TestBed.get(TodoService);
    //  fixture.DebugElement.injector.get(TodoService)
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([[1, 2, 3]]));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
      console.log("EXPECT THEN ");
    });
  }));

  it('should load todos from the server', fakeAsync(() => {
    let service = TestBed.get(TodoService);
    //  fixture.DebugElement.injector.get(TodoService)
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([[1, 2, 3]]));

    fixture.detectChanges();

    tick(); // simulate the passage of time 
    expect(component.todos.length).toBe(3);
    console.log("EXPECT THEN ");
  }));
});
