import { DataSource } from 'typeorm';
import { TataTertib } from './tataTertib.entity';

export const tataTertibProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TataTertib),
    inject: ['DATA_SOURCE'],
  },
];
