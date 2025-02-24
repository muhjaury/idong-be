import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SiswaController } from './siswa.controller';
import { siswaProviders } from './siswa.providers';
import { SiswaService } from './siswa.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SiswaController],
  providers: [...siswaProviders, SiswaService],
})
export class SiswaModule {}
