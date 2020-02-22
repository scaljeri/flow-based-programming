import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FbpService } from 'src/app/fbp.service';

@Component({
  selector: 'app-random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.scss']
})
export class RandomNumberGeneratorComponent implements OnInit {
  value = 'default';

  constructor(private el: ElementRef, private service: FbpService) { }

  ngOnInit(): void {
    console.log('YESY: ' + this.service.test)
  }

  @Input()
  setSocket(value: string) {
    this.value = value;
    console.log('OKOOKOOKOKO');
  }

}
