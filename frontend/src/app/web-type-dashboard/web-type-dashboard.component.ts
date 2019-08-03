import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-web-type-dashboard',
  templateUrl: './web-type-dashboard.component.html',
  styleUrls: ['./web-type-dashboard.component.css']
})
export class WebTypeDashboardComponent implements OnInit {
  @Input() dashboardData: any;

  constructor() {
  }

  ngOnInit() {
  }

}
