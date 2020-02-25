import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeHeaderComponent } from './node-header.component';

describe('NodeHeaderComponent', () => {
  let component: NodeHeaderComponent;
  let fixture: ComponentFixture<NodeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
