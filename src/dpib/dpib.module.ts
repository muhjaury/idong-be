import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DpibController } from './dpib.controller';
import { dpibProviders } from './dpib.providers';
import { DpibService } from './dpib.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DpibController],
  providers: [...dpibProviders, DpibService],
})
export class DpibModule {}
