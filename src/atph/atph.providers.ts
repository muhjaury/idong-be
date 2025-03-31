import { DataSource } from 'typeorm';
import { Atph } from './atph.entity';

export const atphProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Atph),
    inject: ['DATA_SOURCE'],
  },
];
