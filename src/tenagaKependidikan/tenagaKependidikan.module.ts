import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TenagaKependidikanController } from './tenagaKependidikan.controller';
import { tenagaKependidikanProviders } from './tenagaKependidikan.providers';
import { TenagaKependidikanService } from './tenagaKependidikan.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TenagaKependidikanController],
  providers: [...tenagaKependidikanProviders, TenagaKependidikanService],
})
export class TenagaKependidikanModule {}
