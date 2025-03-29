import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PetaStatusKontakModule } from './petaStatusKontak/petaStatusKontak.module';
import { SaranaPrasaranaModule } from './saranaPrasarana/saranaPrasarana.module';
import { SchoolProfileModule } from './schoolProfile/schoolProfile.module';
import { SiswaModule } from './siswa/siswa.module';
import { TenagaKependidikanModule } from './tenagaKependidikan/tenagaKependidikan.module';
import { TenagaPendidikModule } from './tenagaPendidik/tenagaPendidik.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    PetaStatusKontakModule,
    SaranaPrasaranaModule,
    SchoolProfileModule,
    SiswaModule,
    TenagaKependidikanModule,
    TenagaPendidikModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
