import { DataSource } from 'typeorm';
import { Tbsm } from './tbsm.entity';

export const tbsmProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tbsm),
    inject: ['DATA_SOURCE'],
  },
];
