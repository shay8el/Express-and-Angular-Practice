import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {interval, Observable} from 'rxjs';
import {retryWhen} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataBinderService {
  getData(): Observable<any> {
    return this.http.get<any>('/api').pipe(retryWhen(() => {
      return interval(3000);
    }));
  }

  constructor(private http: HttpClient) {
  }

  covertCountsToPercentages(counts: any[]): any[] {
    let totalSum = 0;
    counts.forEach((item) => totalSum += item[1]);
    for (let i = 0; i < counts.length; i++) {
      const percentage = ((counts[i][1] / totalSum) * 100);
      counts[i] = [counts[i][0], percentage];
    }
    return this.getRoundedPercentages(counts);
  }

  private getRoundedPercentages(percentagesToRound: any[]): any[] {
    const dataSetSorted = [...percentagesToRound].sort((a, b) => {
      return (Math.floor(a[1]) - a[1]) - (Math.floor(b[1]) - b[1]);
    });
    const roundedValues = dataSetSorted.map((item) => {
      return [item[0], Math.floor(item[1])];
    });
    const diff = 100 - _.sum(roundedValues.map((item) => item[1]));
    for (let i = 0; i < diff; i++) {
      roundedValues[i][1] += 1;
    }
    const order = percentagesToRound.map((item) => item[0]);
    roundedValues.sort((a, b) => {
      return order.indexOf(a[0]) - order.indexOf(b[0]);
    });
    return roundedValues;
  }

}

