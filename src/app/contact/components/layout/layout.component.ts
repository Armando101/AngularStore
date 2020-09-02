import { Component, OnInit, OnDestroy } from '@angular/core';

import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee.model';
import { Observable, Subscription } from 'rxjs';

import { tap } from 'rxjs/operators';

const names = ['Armando', 'Rodrigo', 'Jenny', 'Yeled', 'Mauricio', 'Juan'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  public salesList: EmployeeData[] = [];
  public bList: EmployeeData[] = [];

  public value$: Observable<number>;

  public value: number;

  // public sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    this.value$ = this.generatorService.getData()
      .pipe(
        tap(num => console.log(num))
      );
  }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);

    // this.sub$ = this.generatorService.getData()
    //   .subscribe(value => {
    //     this.value = value;
    //     console.log(value);
    //   });
  }

  ngOnDestroy(): void {
    // console.log('Destroy');
    // this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string): void {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }
}
