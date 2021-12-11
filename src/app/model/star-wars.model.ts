import { EntityBase } from 'src/app/model/entity-base.mode';
import { Nullable } from './../core/types/utility-types';

export class StarWarsEntity<TEntity extends EntityBase> {
   public count: Nullable<number> = null;
   public next: Nullable<string> = null;
   public previous: Nullable<string> = null;
   public results: Array<TEntity> = [];
}