import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TenagaKependidikanController } from './tenagaKependidikan.controller';
import { profileProviders } from './tenagaKependidikan.providers';
import { TenagaKependidikanService } from './tenagaKependidikan.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TenagaKependidikanController],
  providers: [...profileProviders, TenagaKependidikanService],
})
export class TenagaKependidikanModule {}
