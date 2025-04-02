import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TataTertibController } from './tataTertib.controller';
import { tataTertibProviders } from './tataTertib.providers';
import { TataTertibService } from './tataTertib.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TataTertibController],
  providers: [...tataTertibProviders, TataTertibService],
})
export class TataTertibModule {}
