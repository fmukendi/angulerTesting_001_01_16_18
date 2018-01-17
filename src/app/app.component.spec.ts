/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router/src/directives/router_outlet';
import { RouterLinkWithHref } from '@angular/router/src/directives/router_link';
import { NavComponent } from 'app/nav/nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core/src/metadata/ng_module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ RouterTestingModule.withRoutes([])],
      declarations: [ AppComponent ], // [ AppComponent , NavComponent]
      schemas: [ NO_ERRORS_SCHEMA ] //ignore any element or attribute not recognized
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });


  /* it('should have a link that points to the todos page', () => {
    let des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    
    // <a href="/todos">
    let index = des.findIndex(de => de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);
  }); */
});
