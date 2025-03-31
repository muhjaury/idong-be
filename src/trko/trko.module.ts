import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TrkoController } from './trko.controller';
import { trkoProviders } from './trko.providers';
import { TrkoService } from './trko.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TrkoController],
  providers: [...trkoProviders, TrkoService],
})
export class TrkoModule {}
