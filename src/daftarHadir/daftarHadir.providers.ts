import { DataSource } from 'typeorm';
import { DaftarHadir } from './daftarHadir.entity';

export const daftarHadirProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DaftarHadir),
    inject: ['DATA_SOURCE'],
  },
];
