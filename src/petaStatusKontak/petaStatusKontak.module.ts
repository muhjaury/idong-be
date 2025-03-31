import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PetaStatusKontakController } from './petaStatusKontak.controller';
import { petaStatusKontakProviders } from './petaStatusKontak.providers';
import { PetaStatusKontakService } from './petaStatusKontak.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PetaStatusKontakController],
  providers: [...petaStatusKontakProviders, PetaStatusKontakService],
})
export class PetaStatusKontakModule {}
