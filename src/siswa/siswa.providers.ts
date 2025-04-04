import { DataSource } from 'typeorm';
import { Siswa } from './siswa.entity';

export const siswaProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Siswa),
    inject: ['DATA_SOURCE'],
  },
];
