import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTestComponent } from './test-test.component';

describe('TestTestComponent', () => {
  let component: TestTestComponent;
  let fixture: ComponentFixture<TestTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
