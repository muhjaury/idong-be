import { DataSource } from 'typeorm';
import { TenagaPendidik } from './tenagaPendidik.entity';

export const tenagaPendidikProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TenagaPendidik),
    inject: ['DATA_SOURCE'],
  },
];
