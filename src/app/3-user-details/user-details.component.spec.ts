import { Router, ActivatedRoute } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

class RouterStub {
   navigate(params){
   }
}

class ActivatedRouteStub {
  private subject = new Subject(); // use to push values in an Oberservable
  push(value) {
   this.subject.next(value);
  }
  get params() {//public property
    return this.subject.asObservable();
  } 
  // params: Observable<any> = Observable.empty();
}

xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub},
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should redirect the user to the user page after saving ', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('it should navigate users to the not found page when invalid users id is passed', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
