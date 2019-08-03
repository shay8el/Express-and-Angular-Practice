import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-web-types-block',
  templateUrl: './web-types-block.component.html',
  styleUrls: ['./web-types-block.component.css']
})
export class WebTypesBlockComponent implements OnInit {
  networkName;
  fieldName;
  data;

  @Input()
  set blockData(blockData: any) {
    this.networkName = this.camelToWordsUpper(blockData.networkName.toString());
    const field = _.find(blockData.data, {fieldName: 'type'});
    this.fieldName = this.camelToWordsUpper(field.fieldName.toString()) + 'S';
    this.data = field.count.map((item) => _.toPairs(item)[0]);
  }

  constructor() {
  }

  ngOnInit() {
  }

  private camelToWordsUpper(s: string) {
    return _.startCase(s).toUpperCase();
  }
}

