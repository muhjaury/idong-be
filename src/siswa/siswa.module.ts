import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { siswaProviders } from './siswa.providers';
import { SiswaService } from './siswa.service';
import { SiswaController } from './siswa.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SiswaController],
  providers: [...siswaProviders, SiswaService],
})
export class SiswaModule {}
