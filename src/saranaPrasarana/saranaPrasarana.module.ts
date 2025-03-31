import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SaranaPrasaranaController } from './saranaPrasarana.controller';
import { saranaPrasaranaProviders } from './saranaPrasarana.providers';
import { SaranaPrasaranaService } from './saranaPrasarana.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SaranaPrasaranaController],
  providers: [...saranaPrasaranaProviders, SaranaPrasaranaService],
})
export class SaranaPrasaranaModule {}
