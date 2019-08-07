import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-severities-block',
  templateUrl: './severities-block.component.html',
  styleUrls: ['./severities-block.component.css']
})
export class SeveritiesBlockComponent implements OnInit {
  networkName;
  fieldName;
  data;
  doughnutChartLabels = [];
  doughnutChartData = [];
  toShowChart = false;
  doughnutChartType: ChartType = 'doughnut';
  doughnutColors: any[] = [
    {
      backgroundColor: ['#419fc3', '#df9e26', '#c33d3e']
    }];
  doughnutChartOptions = {
    cutoutPercentage: 90,
    legend: {
      display: false
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    responsive: false,
    maintainAspectRatio: false
  };

  @Input()
  set blockData(blockData: any) {
    this.networkName = this.camelToWordsUpper(blockData.networkName.toString());
    const field = _.find(blockData.data, {fieldName: 'severity'});
    this.fieldName = this.camelToWordsUpper(field.fieldName.toString().slice(0, -1)) + 'IES';
    this.data = field.count.map((item) => _.toPairs(item)[0]);
    this.data.forEach((item) => {
      this.doughnutChartLabels.push(item[0]);
      this.doughnutChartData.push(item[1]);
    });
    this.toShowChart = true;
  }

  constructor() {
  }

  camelToWordsUpper(s: string) {
    return _.startCase(s).toUpperCase();
  }

  ngOnInit() {
  }
}
