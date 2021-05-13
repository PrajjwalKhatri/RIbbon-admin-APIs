import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ribbonDB',
  connector: 'mongodb',
  url: 'mongodb+srv://ribbon:1ESFO3egrPNfUSMB@cluster0-wcxct.mongodb.net/ribbon?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RibbonDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ribbonDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ribbonDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
