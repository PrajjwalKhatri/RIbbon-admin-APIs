import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false, mongodb: {collection:"orders" }}})
export class Orders extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  buyerName: string;

  @property({
    type: 'string',
    required: true,
  })
  agencyId: string;
  
  @property({
    type: 'string',
    required: true,
  })
  vendorName: string;

  @property({
    type: 'string',
    required: true,
  })
  buyerEmail: string;

  @property({
    type: 'string',
    required: true,
  })
  vendorEmail: string;

  @property({
    type: 'number',
    required: true,
  })
  skuAvailable: number;

  @property({
    type: 'string',
    required: true,
  })
  PO: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Orders>) {
    super(data);
  }
}

export interface OrdersRelations {
  // describe navigational properties here
}

export type OrdersWithRelations = Orders & OrdersRelations;
