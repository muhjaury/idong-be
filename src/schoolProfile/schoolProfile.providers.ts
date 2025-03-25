import { DataSource } from 'typeorm';
import { SchoolProfile } from './schoolProfile.entity';

export const profileProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SchoolProfile),
    inject: ['DATA_SOURCE'],
  },
];
