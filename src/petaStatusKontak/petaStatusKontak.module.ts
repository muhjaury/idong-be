import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PetaStatusKontakController } from './petaStatusKontak.controller';
import { profileProviders } from './petaStatusKontak.providers';
import { PetaStatusKontakService } from './petaStatusKontak.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PetaStatusKontakController],
  providers: [...profileProviders, PetaStatusKontakService],
})
export class PetaStatusKontakModule {}
