import { Component } from '@angular/core';
import { fixtureFbpBasic } from '@scaljeri/fbp-shared';
import { FbpService } from './fbp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'another-site';
  data = fixtureFbpBasic;

  nodes: Record<string, any> = {};

  constructor(private service: FbpService) {
    service.test = 100;
  }

  loadComponent(type: string): Promise<any> {
    if (!this.nodes[type]) {
        this.nodes[type] = import(`./components/nodes/${type}/${type}.component`)
          .then((data) => {
            const out = data[`${this.transformtoCamelCase(type)}Component`];
            return out;
          });
    }

    return this.nodes[type];
  }

  transformtoCamelCase(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1).replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }
}
