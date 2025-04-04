import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PelanggaranController } from './pelanggaran.controller';
import { pelanggaranProviders } from './pelanggaran.providers';
import { PelanggaranService } from './pelanggaran.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PelanggaranController],
  providers: [...pelanggaranProviders, PelanggaranService],
})
export class PelanggaranModule {}
