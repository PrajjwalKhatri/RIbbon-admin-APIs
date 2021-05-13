import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RibbonDbDataSource} from '../datasources';
import {Agencies, AgenciesRelations} from '../models';

export class AgenciesRepository extends DefaultCrudRepository<
  Agencies,
  typeof Agencies.prototype.ID,
  AgenciesRelations
> {
  constructor(
    @inject('datasources.ribbonDB') dataSource: RibbonDbDataSource,
  ) {
    super(Agencies, dataSource);
  }
}
