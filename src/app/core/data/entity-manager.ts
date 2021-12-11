import { HttpClient, HttpParams } from "@angular/common/http";

import { EntityBase } from 'src/app/model/entity-base.mode';
import { Planet } from './../../model/planet.model';
import { StarWarsEntity } from './../../model/star-wars.model';

/**
 * @class
 * @classdesc Provides some basic get and filter operations performed to the API.
 */
export class EntityManager<TEntity extends EntityBase> {
   /**
    * 
    * @param service Contains the HTTP service for the communication with the API.
    * @param serviceUrl Contains the endpoint for the given entity.
    */
   constructor(private readonly service: HttpClient, private readonly serviceUrl: string) {
   }

   /**
    * Gets the array of entities of the given entity type.
    * @returns Returns an entity which also contains an array of entities of the given type.
    */
   public async get(): Promise<StarWarsEntity<TEntity>> {
      return this.service.get<StarWarsEntity<TEntity>>(this.serviceUrl).toPromise();
   }

   /**
    * Gets the planet with the given URL.
    * @param planetUrl Contains the URL of a given planet.
    * @returns Returns the planet with the given URL.
    */
   public async getPlanet(planetUrl: string): Promise<Planet> {
      return await this.service.get<Planet>(planetUrl).toPromise();
   }

   /**
    * Searches for people whose name contains the given text.
    * @param text Contains the text used for filtering people by name.
    * @returns Returns the people whose names contain the given text.
    */
   public async search(text: string): Promise<StarWarsEntity<TEntity>> {
      const params = new HttpParams().set('search', text);
      return await this.service.get<StarWarsEntity<TEntity>>(this.serviceUrl, { params: params }).toPromise();
   }
}
