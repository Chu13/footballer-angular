import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPageComponent } from './match-page.component';

describe('MatchPageComponent', () => {
  let component: MatchPageComponent;
  let fixture: ComponentFixture<MatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
