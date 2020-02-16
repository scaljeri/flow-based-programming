import { Component } from '@angular/core';
import { fixtureFbpBasic } from '@scaljeri/fbp-shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'another-site';
  data = fixtureFbpBasic;
}
