import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DaftarHadirController } from './daftarHadir.controller';
import { daftarHadirProviders } from './daftarHadir.providers';
import { DaftarHadirService } from './daftarHadir.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DaftarHadirController],
  providers: [...daftarHadirProviders, DaftarHadirService],
})
export class DaftarHadirModule {}
