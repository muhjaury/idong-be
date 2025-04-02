import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArsipModule } from './arsip/arsip.module';
import { AtphModule } from './atph/atph.module';
import { DatabaseModule } from './database/database.module';
import { DpibModule } from './dpib/dpib.module';
import { GaleriModule } from './galeri/galeri.module';
import { PetaStatusKontakModule } from './petaStatusKontak/petaStatusKontak.module';
import { PortalBeritaModule } from './portalBerita/portalBerita.module';
import { SaranaPrasaranaModule } from './saranaPrasarana/saranaPrasarana.module';
import { SchoolProfileModule } from './schoolProfile/schoolProfile.module';
import { SiswaModule } from './siswa/siswa.module';
import { TataTertibModule } from './tataTertib/tataTertib.module';
import { TbsmModule } from './tbsm/tbsm.module';
import { TenagaKependidikanModule } from './tenagaKependidikan/tenagaKependidikan.module';
import { TenagaPendidikModule } from './tenagaPendidik/tenagaPendidik.module';
import { TkjModule } from './tkj/tkj.module';
import { TrkoModule } from './trko/trko.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ArsipModule,
    AtphModule,
    DatabaseModule,
    DpibModule,
    GaleriModule,
    PetaStatusKontakModule,
    PortalBeritaModule,
    SaranaPrasaranaModule,
    SchoolProfileModule,
    SiswaModule,
    TataTertibModule,
    TbsmModule,
    TenagaKependidikanModule,
    TenagaPendidikModule,
    TkjModule,
    TrkoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
