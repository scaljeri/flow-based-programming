import { Injectable } from '@angular/core';
import { NodeComponent } from '../components/node/node.component';
import { Subject } from 'rxjs';

export interface INodeServiceItem {
  nodeId: string;
  element: HTMLElement;
  node: NodeComponent;
}

@Injectable({
  providedIn: 'root'
})
export class NodeManagerService {
  private newNodeSubject = new Subject<INodeServiceItem>();
  public newNode$ = this.newNodeSubject.asObservable;

  private removeNodeSubject = new Subject<INodeServiceItem>();
  public removeNode$ = this.newNodeSubject.asObservable;

  public nodeList: INodeServiceItem[] = [];
  public nodeMap: Record<string, INodeServiceItem> = {};

  getNode(nodeId: string): INodeServiceItem {
    return this.nodeMap[nodeId];
  }

  lookupByHTMLElement(element: HTMLElement): INodeServiceItem {
    if (element) {
      return this.getNode(element.getAttribute('id'));
    }
  }

  addNode(nodeId: string, element: HTMLElement, node: NodeComponent): void {
    const item = { nodeId, element, node };
    this.nodeList.push(item);
    this.nodeMap[nodeId] = item;

    this.newNodeSubject.next(item);
  }

  removeNode(nodeId: string): void {
    const item = this.nodeMap[nodeId];
    this.nodeList.splice(this.nodeList.indexOf(item), 1);
    delete this.nodeMap[nodeId];

    this.removeNodeSubject.next(item);
  }
}
