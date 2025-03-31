import { DataSource } from 'typeorm';
import { Trko } from './trko.entity';

export const trkoProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Trko),
    inject: ['DATA_SOURCE'],
  },
];
