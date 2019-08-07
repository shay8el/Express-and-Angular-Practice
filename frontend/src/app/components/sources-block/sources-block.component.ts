import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {DataBinderService} from '../../services/data-binder/data-binder.service';

@Component({
  selector: 'app-sources-block',
  templateUrl: './sources-block.component.html',
  styleUrls: ['./sources-block.component.css']
})
export class SourcesBlockComponent implements OnInit {
  @Input()
  set blockData(blockData: any) {
    this.networkName = this.camelToWordsUpper(blockData.networkName.toString());
    const field = _.find(blockData.data, {fieldName: 'source'});
    this.fieldName = this.camelToWordsUpper(field.fieldName.toString()) + 'S';
    this.data = this.dataBinder.covertCountsToPercentages(field.count.map((item) => _.toPairs(item)[0]));
  }

  constructor(private dataBinder: DataBinderService) {
  }

  networkName;
  fieldName;
  data;

  camelToWordsUpper(s: string) {
    return _.startCase(s).toUpperCase();
  }

  ngOnInit() {
  }
}
