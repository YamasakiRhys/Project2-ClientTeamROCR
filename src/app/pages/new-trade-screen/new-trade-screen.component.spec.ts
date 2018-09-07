import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTradeScreenComponent } from './new-trade-screen.component';

describe('NewTradeScreenComponent', () => {
  let component: NewTradeScreenComponent;
  let fixture: ComponentFixture<NewTradeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTradeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTradeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
