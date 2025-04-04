import { DataSource } from 'typeorm';
import { PetaStatusKontak } from './petaStatusKontak.entity';

export const petaStatusKontakProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PetaStatusKontak),
    inject: ['DATA_SOURCE'],
  },
];
