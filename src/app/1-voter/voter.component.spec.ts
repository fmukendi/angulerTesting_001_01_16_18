import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // fixture.nativeElement
    // fixture.debugElement
  });

  it('it should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    
    // fixture.debugElement.query(By.directive(VoterComponent))
    // fixture.debugElement.queryAll(By.css('.vote-count'));
    let de = fixture.debugElement.query(By.css('.vote-count'));//return first element that 
    // de.nativeElement is not good because it is of type any
    let el: HTMLElement = de.nativeElement; // in order to get intellisense

    expect(el.innerText).toContain(21);
  });

  it('it should highlight the upvote button if i have upvoted', () => {
    component.myVote = 1;
    
    // fixture.debugElement.query(By.directive(VoterComponent))
    // fixture.debugElement.queryAll(By.css('.vote-count'));
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));//return first element that 
    // de.nativeElement is not good because it is of type any
    //let el: HTMLElement = de.nativeElement; // in order to get intellisense

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('it should increase total votes when i click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null); // integration test
    // component.upVote();// unit test

    expect(component.totalVotes).toBe(1);
  });
});
