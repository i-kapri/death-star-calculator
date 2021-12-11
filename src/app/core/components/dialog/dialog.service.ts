import { ComponentType } from '@angular/cdk/portal';
import { DialogConfig } from './dialog.config';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from './../../../views/search/search.component';

/**
 * @class
 * @classdesc Provides a way for opening components as modals and for getting data from them.
 */
@Injectable({
   providedIn: 'root'
})
export class DialogService {
   /**
    * @constructor
    * @param dialog Contains the angular material dialog service.
    */
   constructor(private readonly dialog: MatDialog) {
   }

   /**
    * Opens a given component with given configurations as an overlay.
    * @param component Contains the component to be opened as an overlay.
    * @param config Contains the dialog configuration data.
    * @returns Returns the data passed to the dialog result on close.
    */
   public async open(component: ComponentType<SearchComponent>, config?: DialogConfig): Promise<DialogConfig> {
      return new Promise<DialogConfig>(resolve => {
         this.dialog.open(component, {
            disableClose: false,
            hasBackdrop: true,
            height: '85vh',
            width: '85vh',
            data: config
         }).afterClosed().subscribe(result => resolve(result))
      });
   }
}
