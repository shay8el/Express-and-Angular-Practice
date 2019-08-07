import {Component, OnInit} from '@angular/core';
import {DataBinderService} from './services/data-binder/data-binder.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  data: Observable<any>;

  constructor(private dataBinder: DataBinderService) {
  }

  ngOnInit() {
    this.data = this.dataBinder.getData();
  }

}

