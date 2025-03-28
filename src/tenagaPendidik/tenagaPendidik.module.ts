import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TenagaPendidikController } from './tenagaPendidik.controller';
import { profileProviders } from './tenagaPendidik.providers';
import { TenagaPendidikService } from './tenagaPendidik.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TenagaPendidikController],
  providers: [...profileProviders, TenagaPendidikService],
})
export class TenagaPendidikModule {}
