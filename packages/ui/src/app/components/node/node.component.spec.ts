import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { NodeComponent } from './node.component';
import { NodeManagerService } from 'src/app/services/node-manager.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponent ],
       providers: [
        { provide: NodeManagerService, useValue: {} },
        { provide: Store, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
