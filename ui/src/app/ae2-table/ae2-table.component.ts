import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';

import { ServiceBaseService } from '../service-base/service-base.service';

@Component({
  selector: 'app-ae2-table',
  templateUrl: './ae2-table.component.html',
  styleUrls: ['./ae2-table.component.scss']
})
export class Ae2TableComponent implements OnInit {
  public arriPaginationValues = [10, 20, 50, 100];
  public arroFilteredRows = [];
  public arroKeys = [];
  public iSelectePaginationValue = 10;
  private subscriptionState: Subscription;

  constructor(public mBaseService: ServiceBaseService) { }

  fUpdateTable() {
    this.arroFilteredRows = this.mBaseService.State.oUrlCache['sample_data'] && this.mBaseService.State.oUrlCache['sample_data'].slice(0, this.iSelectePaginationValue)
    this.arroKeys = Object.keys(this.arroFilteredRows[0]);
  }

  ngOnInit() {
    this.subscriptionState = this.mBaseService.obsState.subscribe(oStateEvent => {
      if (oStateEvent.sEventType === 'table data change') this.fUpdateTable();
    });

    // TODO: unsub
    this.mBaseService.fobsGet('sample_data').subscribe(arroRows => this.fUpdateTable())
  }

  ngOnDestroy() {
    this.subscriptionState.unsubscribe();
  }

}
