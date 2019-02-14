import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';

import { ServiceBaseService } from '../service-base/service-base.service';

@Component({
  selector: 'app-ae2-table',
  templateUrl: './ae2-table.component.html',
  styleUrls: ['./ae2-table.component.scss']
})
export class Ae2TableComponent implements OnInit {
  private subscriptionState: Subscription;

  constructor(public mBaseService: ServiceBaseService) { }

  fUpdateTable() {

  }

  ngOnInit() {
    this.subscriptionState = this.mBaseService.obsState.subscribe(oStateEvent => {
      if (oStateEvent.sEventType === 'table data change') this.fUpdateTable();
    });

    this.mBaseService.fGet('sample_data').subscribe(arroRows => {
      console.log(arroRows)
    })
  }

  ngOnDestroy() {
    this.subscriptionState.unsubscribe();
  }

}
