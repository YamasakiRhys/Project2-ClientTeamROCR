import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListScreenComponent } from './users-list-screen.component';

describe('UsersListScreenComponent', () => {
  let component: UsersListScreenComponent;
  let fixture: ComponentFixture<UsersListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
