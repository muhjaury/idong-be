import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SiswaModule } from './siswa/siswa.module';
import { SiswaController } from './siswa/siswa.controller';
import { SiswaService } from './siswa/siswa.service';

@Module({
  imports: [DatabaseModule, SiswaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
