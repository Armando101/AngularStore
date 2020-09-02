import { Component, OnInit } from '@angular/core';

import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee.model';

const names = ['Armando', 'Rodrigo', 'Jenny', 'Yeled', 'Mauricio', 'Juan'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public salesList: EmployeeData[] = [];
  public bList: EmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: EmployeeData[], label: string): void {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }
}
