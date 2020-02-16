import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { IFbpNode } from '@scaljeri/fbp-shared';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FfpState } from 'src/app/store/state';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
	@Input() id: string;

	public node$: Observable<IFbpNode>;
	public node: IFbpNode;

	constructor(private store: Store) {
		this.node$ = this.store
			.select(FfpState).pipe(
				filter((node: IFbpNode) => node.id === this.id));
	 }

  ngOnInit(): void {
	//   this.node$.subscribe(node => this.node = node);
  }

}
