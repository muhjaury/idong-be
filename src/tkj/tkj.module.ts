import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TkjController } from './tkj.controller';
import { tkjProviders } from './tkj.providers';
import { TkjService } from './tkj.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TkjController],
  providers: [...tkjProviders, TkjService],
})
export class TkjModule {}
