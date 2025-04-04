import { DataSource } from 'typeorm';
import { Pelanggaran } from './pelanggaran.entity';

export const pelanggaranProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Pelanggaran),
    inject: ['DATA_SOURCE'],
  },
];
