import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TbsmController } from './tbsm.controller';
import { tbsmProviders } from './tbsm.providers';
import { TbsmService } from './tbsm.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TbsmController],
  providers: [...tbsmProviders, TbsmService],
})
export class TbsmModule {}
