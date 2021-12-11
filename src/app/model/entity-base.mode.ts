import { Nullable } from '../core/types/utility-types';

export abstract class EntityBase {
   public name: Nullable<string> = null;
   public films: Array<string> = [];
   public created: Nullable<Date> = null;
   public edited: Nullable<Date> = null;
   public url: Nullable<string> = null;
}
