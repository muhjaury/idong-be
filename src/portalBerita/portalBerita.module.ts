import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PortalBeritaController } from './portalBerita.controller';
import { portalBeritaProviders } from './portalBerita.providers';
import { PortalBeritaService } from './portalBerita.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PortalBeritaController],
  providers: [...portalBeritaProviders, PortalBeritaService],
})
export class PortalBeritaModule {}
