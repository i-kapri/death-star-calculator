import { ConstructorType } from '../types/utility-types';
import { EntityBase } from 'src/app/model/entity-base.mode';
import { EntityManager } from './entity-manager';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * @class
 * @classdesc Provides some basic GET operations applied to the API.
 */
@Injectable({
   providedIn: 'root'
})
export class EntityService<TEntity extends EntityBase> {
   /** Contains the base URL of the SWAPI API. */
   private readonly baseUrl = environment.api.baseUrl;

   /**
    * @constructor
    * @param service Contains the HTTP client service for communicating with the API.
    */
   constructor(private readonly service: HttpClient) {
   }

   public entity(EntityCtor: ConstructorType<TEntity>): EntityManager<TEntity> {
      const serviceUrl = this.baseUrl.concat(this.pluralize(EntityCtor.name));
      return new EntityManager<TEntity>(this.service, serviceUrl);
   }

   /**
    * Pluralizes a given word and converts it to lower case.
    * @param word Contains the given word to be pluralized.
    * @returns Returns the plural form of the given word.
    */
   private pluralize(word: string): string {
      const lowerCaseWord = word.toLowerCase();
      switch(lowerCaseWord) {
         case 'person':
            return 'people';
         case 'planet':
            return 'planets';
         default:
            return '';
      }
   }
}
