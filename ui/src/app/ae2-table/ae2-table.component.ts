import { Component, OnInit } from '@angular/core';

import { ServiceBaseService } from '../service-base/service-base.service';

@Component({
  selector: 'app-ae2-table',
  templateUrl: './ae2-table.component.html',
  styleUrls: ['./ae2-table.component.scss']
})
export class Ae2TableComponent implements OnInit {

  constructor(public mBaseService: ServiceBaseService) { }

  ngOnInit() {
  }

}
