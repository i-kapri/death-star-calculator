import { EntityBase } from './entity-base.mode';
import { Nullable } from './../core/types/utility-types';

export class Planet extends EntityBase {
   public rotation_period: Nullable<string> = null;
   public orbital_period: Nullable<string> = null;
   public diameter: Nullable<string> = null;
   public climate: Nullable<string> = null;
   public gravity: Nullable<string> = null;
   public terrain: Nullable<string> = null;
   public surface_water: Nullable<string> = null;
   public population: Nullable<string> = null;
   public residents: Array<string> = [];
}
