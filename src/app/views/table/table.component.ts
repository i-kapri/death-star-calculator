import { Component } from '@angular/core';
import { DialogConfig } from './../../core/components/dialog/dialog.config';
import { DialogService } from './../../core/components/dialog/dialog.service';
import { MatTableDataSource } from '@angular/material/table';
import { SearchComponent } from './../search/search.component';

/**
 * @class
 * @classdesc Defines a component for showing the table of calculations
 * as well as for adding a new calculation to the table.
 */
@Component({
   selector: 'sw-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.scss']
})
export class TableComponent {
   /**
    * Contains the data source to be bound with the table.
    */
   public dataSource = new MatTableDataSource<DialogConfig>([]);

   /**
    * Contains the array of calculations to be shown on the table.
    */
   private readonly calculations: Array<DialogConfig> = [];
   
   /**
    * Contains the columns of the calculations table.
    */
   public readonly columns = ['people', 'volume'];

   /**
    * 
    * @param dialog Contains the dialog service.
    */
   constructor(private readonly dialog: DialogService) {
   }

   /**
    * Adds the new calculation to the table of calculations.
    */
   public async onAddCalculation(): Promise<void> {
      const calculation = await this.dialog.open(SearchComponent);
      if (calculation) {
         this.calculations.push(calculation);
         this.dataSource = new MatTableDataSource<DialogConfig>(this.calculations);
      }
   }
}
