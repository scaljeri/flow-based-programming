import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.scss']
})
export class RandomNumberGeneratorComponent implements OnInit {

  public value: number;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
     this.value = Math.random();
    }, 1000);
  }

}
