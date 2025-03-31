import { DataSource } from 'typeorm';
import { SchoolProfile } from './schoolProfile.entity';

export const schoolProfileProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SchoolProfile),
    inject: ['DATA_SOURCE'],
  },
];
