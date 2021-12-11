import { EntityBase } from './entity-base.mode';
import { Nullable } from './../core/types/utility-types';

export class Person extends EntityBase {
   public height: Nullable<string> = null;
   public mass: Nullable<string> = null;
   public hair_color: Nullable<string> = null;
   public skin_color: Nullable<string> = null;
   public eye_color: Nullable<string> = null;
   public birth_year: Nullable<string> = null;
   public gender: Nullable<'male' | 'female' | 'n/a'> = null;
   public homeworld: Nullable<string> = null;
   public species: Array<string> = [];
   public vehicles: Array<string> = [];
   public starships: Array<string> = [];
}
