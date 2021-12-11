import { Component, OnInit } from '@angular/core';

import { EntityService } from './core/data/entity.service';
import { Person } from './model/person.model';
import { Planet } from './model/planet.model';

@Component({
   selector: 'sw-container',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
