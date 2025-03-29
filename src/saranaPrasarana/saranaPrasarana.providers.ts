import { DataSource } from 'typeorm';
import { SaranaPrasarana } from './saranaPrasarana.entity';

export const profileProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SaranaPrasarana),
    inject: ['DATA_SOURCE'],
  },
];
