import { DataSource } from 'typeorm';
import { PortalBerita } from './portalBerita.entity';

export const portalBeritaProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PortalBerita),
    inject: ['DATA_SOURCE'],
  },
];
