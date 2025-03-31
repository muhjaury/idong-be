import { DataSource } from 'typeorm';
import { Arsip } from './arsip.entity';

export const arsipProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Arsip),
    inject: ['DATA_SOURCE'],
  },
];
