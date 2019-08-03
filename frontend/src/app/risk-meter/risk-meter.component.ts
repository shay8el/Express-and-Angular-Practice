import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-risk-meter',
  templateUrl: './risk-meter.component.html',
  styleUrls: ['./risk-meter.component.css']
})
export class RiskMeterComponent implements OnInit {
  @Input() riskMeterValue: number;

  constructor() {
  }

  ngOnInit() {
  }

}
