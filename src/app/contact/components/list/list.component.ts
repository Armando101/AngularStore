import { Component, OnInit, Input } from '@angular/core';

import { EmployeeData } from '@core/models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() data: EmployeeData[] = [];

  public label: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.data.push({
      label: this.label,
      num: 30,
    });
    this.label = '';
  }
}
