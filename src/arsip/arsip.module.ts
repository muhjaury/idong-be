import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArsipController } from './arsip.controller';
import { arsipProviders } from './arsip.providers';
import { ArsipService } from './arsip.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ArsipController],
  providers: [...arsipProviders, ArsipService],
})
export class ArsipModule {}
