import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GaleriController } from './galeri.controller';
import { galeriProviders } from './galeri.providers';
import { GaleriService } from './galeri.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GaleriController],
  providers: [...galeriProviders, GaleriService],
})
export class GaleriModule {}
