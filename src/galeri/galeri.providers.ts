import { DataSource } from 'typeorm';
import { Galeri } from './galeri.entity';

export const galeriProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Galeri),
    inject: ['DATA_SOURCE'],
  },
];
