import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
