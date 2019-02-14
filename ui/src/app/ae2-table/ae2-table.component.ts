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
  public iSelectePaginationValue = 10;
  private subscriptionState: Subscription;

  constructor(public mBaseService: ServiceBaseService) { }

  fUpdateTable() {
    const oModel = this.arroFilteredRows[0];
    console.log(oModel, this.arroFilteredRows)
  }

  ngOnInit() {
    this.subscriptionState = this.mBaseService.obsState.subscribe(oStateEvent => {
      if (oStateEvent.sEventType === 'table data change') this.fUpdateTable();
    });

    this.mBaseService.fobsGet('sample_data').subscribe(arroRows => {
      this.arroFilteredRows = arroRows.slice(0, this.iSelectePaginationValue)
      this.fUpdateTable();
    })
  }

  ngOnDestroy() {
    this.subscriptionState.unsubscribe();
  }

}
