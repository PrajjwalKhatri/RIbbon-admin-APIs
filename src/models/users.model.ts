import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false, mongodb: {collection:"users" }}})
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  @property({
    type: 'number',
    required: true,
  })
  roleType: number;

  @property({
    type: 'number',
    required: true,
  })
  access: number;

  @property({
    type: 'number',
    required: true,
  })
  keyType: number;

  @property({
    type: 'number',
    required: true,
  })
  license: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  tel: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
