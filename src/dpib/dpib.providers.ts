import { DataSource } from 'typeorm';
import { Dpib } from './dpib.entity';

export const dpibProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dpib),
    inject: ['DATA_SOURCE'],
  },
];
