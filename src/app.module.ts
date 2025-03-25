import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SiswaModule } from './siswa/siswa.module';
import { UserModule } from './user/user.module';
import { SchoolProfileModule } from './schoolProfile/schoolProfile.module';

@Module({
  imports: [DatabaseModule, SiswaModule, UserModule, SchoolProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
