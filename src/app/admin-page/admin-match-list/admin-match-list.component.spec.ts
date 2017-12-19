import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchListComponent } from './admin-match-list.component';

describe('AdminMatchListComponent', () => {
  let component: AdminMatchListComponent;
  let fixture: ComponentFixture<AdminMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
