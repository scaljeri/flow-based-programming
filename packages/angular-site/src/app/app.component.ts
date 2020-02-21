import { Component } from '@angular/core';
import { fixtureFbpBasic, IFbpNode } from '@scaljeri/fbp-shared';

// const NODE_MAPPER = {
//   'random-number-generator': 'loadRandomNumberComp',
//   'logger': 'loadLoggerComp'
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'another-site';
  data = fixtureFbpBasic;

  nodes = {};

  // nodeId = this.data.nodes[0].id;

  loadComponent(type: string) {
    if (!this.nodes[type]) {
      console.log('LOAD ' + type, `./components/nodes/${type}/${type}.component`);
        // this.nodes[node.type] = this[NODE_MAPPER[node.type]]();
        this.nodes[type] = import(`./components/nodes/${type}/${type}.component`)
          .then((data) => {
            const out = data[`${this.transformtoCamelCase(type)}Component`];
            console.log('loaded', out);
            return out;
          });
    }

    return this.nodes[type];
  }

  // loadRandomNumberComp() {
  //   return import(`./components/nodes/random-number-generator/random-number-generator.component`)
  //     .then(({ RandomNumberGeneratorComponent }) => RandomNumberGeneratorComponent);
  // }

  // loadLoggerComp() {
  //   return import(`./components/nodes/logger/logger.component`)
  //     .then(({ LoggerComponent }) => LoggerComponent);
  // }

  transformtoCamelCase(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1).replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }
}
