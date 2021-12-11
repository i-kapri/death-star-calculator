import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { DialogConfig } from './../../core/components/dialog/dialog.config';
import { EntityService } from './../../core/data/entity.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { Person } from './../../model/person.model';

/**
 * @class
 * @classdesc Defines a view component for searching in the people database
 * of the external API and for making calculations.
 */
@Component({
   selector: 'sw-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
   /**
    * Contains the form control used by the autocomplete search field.
    */
   public readonly controlPerson = new FormControl();

   /**
    * Contains the list of people in the SWAPI database.
    */
   public people: Person[] = [];

   /**
    * Contains the list of the selected people.
    */
   public readonly selectedPeople: Person[] = [];

   /**
    * Contains whether to show the total volume of the planets.
    */
   public showVolume: boolean = false;

   /**
    * Contains a subscription which triggers on typing in the search field.
    */
   private subscriber?: Subscription;

   /**
    * Contains the total volume of the planets in which the selected people live.
    */
   public volume: number = 0;

   /**
    * @constructor
    * @param service Contains the service for the communication with the API.
    * @param dialogRef Contains the service for managing the opened dialog.
    */
   constructor(
      private readonly service: EntityService<Person>,
      private readonly dialogRef: MatDialogRef<SearchComponent, DialogConfig>
   ) {
   }

   /**
    * Gets the volume of a planet with a given URL.
    * @param planetUrl Contains the URL to the planet of the given person.
    * @returns Returns the volume of the planet from which the given person comes.
    */
   private async getVolume(planetUrl: string): Promise<number> {
      const planet = await this.service.entity(Person).getPlanet(planetUrl);
      const diameter = planet.diameter;
      if (diameter) {
         const radius = Number(diameter) / 2;
         return (4 / 3) * Math.PI * Math.pow(radius, 3);
      }
      return 0;
   }  

   /**
    * Destroys the autocomplete value changes subscription.
    */
   public ngOnDestroy(): void {
      this.subscriber?.unsubscribe();
   }

   /**
    * Closes the dialog and returns the dialog data to the caller.
    */
   public onClose(): void {
      const dialogResult = { people: this.selectedPeople.map(person => person.name).join(', '), volume: this.volume };
      this.dialogRef.close(dialogResult);
   }

   /**
    * Shows the total volume of the planets of the selected people.
    */
   public onGetVolumeClick(): void {
      this.showVolume = true;
   }

   /**
    * Performs triggering while the user types in the search field in order for
    * the search records of the dropdown list to be refreshed.
    */
   public async ngOnInit(): Promise<void> {
      const valueChanges: Observable<string> = this.controlPerson.valueChanges;
      this.subscriber = valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(async value => {
         if (value && value.length > 1) {
            const results = (await this.service.entity(Person).search(value)).results;
            if (results.length < 1) {
               this.controlPerson.setErrors({ noResults: true });
            }
            this.people = results;
         } else {
            this.people = [];
         }
      });
   }

   /**
    * @summary Intercepts clicks on the options of the dropdown list and reacts to them.
    * @param event Contains an event triggered in case a selection is made.
    */
   public async onPersonSelected(event: MatAutocompleteSelectedEvent): Promise<void> {
      const name = event.option.value;
      const person = this.people.find(person => person.name === name);
      if (person && !this.selectedPeople.find(p => p.name === name) && person.homeworld) {
         /* the volume of the planet of the given person should be added only in case
         this person comes from a planet different from the ones selected before */ 
         const isSamePlanet = this.selectedPeople.some(p => p.homeworld === person.homeworld);
         
         this.selectedPeople.push(person);
         if (!isSamePlanet) {
            const volume = await this.getVolume(person.homeworld);
            this.volume += volume;
         }
      }
      this.controlPerson.setValue(null);
   }
}
