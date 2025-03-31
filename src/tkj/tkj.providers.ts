import { DataSource } from 'typeorm';
import { Tkj } from './tkj.entity';

export const tkjProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tkj),
    inject: ['DATA_SOURCE'],
  },
];
