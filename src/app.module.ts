import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SchoolProfileModule } from './schoolProfile/schoolProfile.module';
import { SiswaModule } from './siswa/siswa.module';
import { TenagaPendidikModule } from './tenagaPendidik/tenagaPendidik.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    SiswaModule,
    UserModule,
    SchoolProfileModule,
    TenagaPendidikModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
