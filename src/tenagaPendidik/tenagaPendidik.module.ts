import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TenagaPendidikController } from './tenagaPendidik.controller';
import { tenagaPendidikProviders } from './tenagaPendidik.providers';
import { TenagaPendidikService } from './tenagaPendidik.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TenagaPendidikController],
  providers: [...tenagaPendidikProviders, TenagaPendidikService],
})
export class TenagaPendidikModule {}
