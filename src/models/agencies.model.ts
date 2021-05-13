import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false, mongodb: {collection:"agencies" }}})
export class Agencies extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
    required: true,
  })
  agencyName: string;

  @property({
    type: 'string',
    required: true,
  })
  website: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  productCount: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agencies>) {
    super(data);
  }
}

export interface AgenciesRelations {
  // describe navigational properties here
}

export type AgenciesWithRelations = Agencies & AgenciesRelations;
