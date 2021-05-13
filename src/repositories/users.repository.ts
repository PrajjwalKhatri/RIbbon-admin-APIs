import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RibbonDbDataSource} from '../datasources';
import {Users, UsersRelations} from '../models';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.Id,
  UsersRelations
> {
  constructor(
    @inject('datasources.ribbonDB') dataSource: RibbonDbDataSource,
  ) {
    super(Users, dataSource);
  }
}
