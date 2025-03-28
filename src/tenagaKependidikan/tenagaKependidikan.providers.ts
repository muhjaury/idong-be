import { DataSource } from 'typeorm';
import { TenagaKependidikan } from './tenagaKependidikan.entity';

export const profileProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TenagaKependidikan),
    inject: ['DATA_SOURCE'],
  },
];
