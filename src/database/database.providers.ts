import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: process.env.NEXT_PUBLIC_TYPE === 'prod' ? 'mariadb' : 'mysql',
        host:
          process.env.NEXT_PUBLIC_TYPE === 'prod'
            ? '103.191.63.62'
            : 'localhost',
        port: 3306,
        username: process.env.NEXT_PUBLIC_TYPE === 'prod' ? 'farid' : 'root',
        password: process.env.NEXT_PUBLIC_TYPE === 'prod' ? 'Farid15!' : '',
        database: 'smks',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
