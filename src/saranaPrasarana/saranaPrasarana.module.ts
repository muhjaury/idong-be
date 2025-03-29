import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SaranaPrasaranaController } from './saranaPrasarana.controller';
import { profileProviders } from './saranaPrasarana.providers';
import { SaranaPrasaranaService } from './saranaPrasarana.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SaranaPrasaranaController],
  providers: [...profileProviders, SaranaPrasaranaService],
})
export class SaranaPrasaranaModule {}
