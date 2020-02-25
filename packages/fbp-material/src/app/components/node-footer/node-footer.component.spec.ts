import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFooterComponent } from './node-footer.component';

describe('NodeFooterComponent', () => {
  let component: NodeFooterComponent;
  let fixture: ComponentFixture<NodeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
