import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AtphController } from './atph.controller';
import { atphProviders } from './atph.providers';
import { AtphService } from './atph.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AtphController],
  providers: [...atphProviders, AtphService],
})
export class AtphModule {}
