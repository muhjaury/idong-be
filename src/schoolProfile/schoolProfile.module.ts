import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SchoolProfileController } from './schoolProfile.controller';
import { schoolProfileProviders } from './schoolProfile.providers';
import { SchoolProfileService } from './schoolProfile.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SchoolProfileController],
  providers: [...schoolProfileProviders, SchoolProfileService],
})
export class SchoolProfileModule {}
