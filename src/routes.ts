import { Request, Response, Router } from 'express';
import { DataSource } from 'typeorm';
import { Arsip } from './arsip/arsip.entity';
import { ArsipService } from './arsip/arsip.service';
import { Atph } from './atph/atph.entity';
import { AtphService } from './atph/atph.service';
import { DaftarHadir } from './daftarHadir/daftarHadir.entity';
import { DaftarHadirService } from './daftarHadir/daftarHadir.service';
import { Dpib } from './dpib/dpib.entity';
import { DpibService } from './dpib/dpib.service';
import { Galeri } from './galeri/galeri.entity';
import { GaleriService } from './galeri/galeri.service';
import { Pelanggaran } from './pelanggaran/pelanggaran.entity';
import { PelanggaranService } from './pelanggaran/pelanggaran.service';
import { PetaStatusKontak } from './petaStatusKontak/petaStatusKontak.entity';
import { PetaStatusKontakService } from './petaStatusKontak/petaStatusKontak.service';
import { PortalBerita } from './portalBerita/portalBerita.entity';
import { PortalBeritaService } from './portalBerita/portalBerita.service';
import { SaranaPrasarana } from './saranaPrasarana/saranaPrasarana.entity';
import { SaranaPrasaranaService } from './saranaPrasarana/saranaPrasarana.service';
import { SchoolProfile } from './schoolProfile/schoolProfile.entity';
import { SchoolProfileService } from './schoolProfile/schoolProfile.service';
import { Siswa } from './siswa/siswa.entity';
import { SiswaService } from './siswa/siswa.service';
import { TataTertib } from './tataTertib/tataTertib.entity';
import { TataTertibService } from './tataTertib/tataTertib.service';
import { Tbsm } from './tbsm/tbsm.entity';
import { TbsmService } from './tbsm/tbsm.service';
import { TenagaKependidikan } from './tenagaKependidikan/tenagaKependidikan.entity';
import { TenagaKependidikanService } from './tenagaKependidikan/tenagaKependidikan.service';
import { TenagaPendidik } from './tenagaPendidik/tenagaPendidik.entity';
import { TenagaPendidikService } from './tenagaPendidik/tenagaPendidik.service';
import { Tkj } from './tkj/tkj.entity';
import { TkjService } from './tkj/tkj.service';
import { Trko } from './trko/trko.entity';
import { TrkoService } from './trko/trko.service';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';

type CrudService = {
  findAll: () => Promise<unknown>;
  register: (body: any) => Promise<{ data?: unknown }>;
  delete: (id: number) => Promise<{ data?: unknown }>;
};

function sendResult(response: Response, data: unknown) {
  response.json(data ? { status: 'SUCCESS', data } : { status: 'ERROR' });
}

function mountCrudRoutes(router: Router, path: string, service: CrudService) {
  router.get(`/${path}/fetch`, async (_request, response, next) => {
    try {
      sendResult(response, await service.findAll());
    } catch (error) {
      next(error);
    }
  });

  router.post(`/${path}/register`, async (request, response, next) => {
    try {
      const result = await service.register(request.body);
      sendResult(response, result?.data);
    } catch (error) {
      next(error);
    }
  });

  router.post(`/${path}/delete`, async (request, response, next) => {
    try {
      const result = await service.delete(request.body);
      sendResult(response, result?.data);
    } catch (error) {
      next(error);
    }
  });
}

function mountDataRoute(
  router: Router,
  path: string,
  operation: (body: any) => Promise<unknown>,
) {
  router.post(`/${path}`, async (request, response, next) => {
    try {
      sendResult(response, await operation(request.body));
    } catch (error) {
      next(error);
    }
  });
}

function mountReadRoute(
  router: Router,
  path: string,
  operation: () => Promise<unknown>,
) {
  router.get(`/${path}`, async (_request, response, next) => {
    try {
      sendResult(response, await operation());
    } catch (error) {
      next(error);
    }
  });
}

export function createApiRouter(dataSource: DataSource): Router {
  const router = Router();
  const service = <Entity extends object, Service>(
    entity: new (...args: any[]) => Entity,
    ServiceType: new (repository: any) => Service,
  ) => new ServiceType(dataSource.getRepository(entity));

  mountCrudRoutes(router, 'arsip', service(Arsip, ArsipService));
  mountCrudRoutes(router, 'atph', service(Atph, AtphService));

  const daftarHadir = service(DaftarHadir, DaftarHadirService);
  mountCrudRoutes(router, 'daftarHadir', daftarHadir);
  mountDataRoute(router, 'daftarHadir/fetchData', (body) =>
    daftarHadir.daftarHadir(body),
  );

  mountCrudRoutes(router, 'dpib', service(Dpib, DpibService));
  mountCrudRoutes(router, 'galeri', service(Galeri, GaleriService));

  const pelanggaran = service(Pelanggaran, PelanggaranService);
  mountCrudRoutes(router, 'pelanggaran', pelanggaran);
  mountDataRoute(router, 'pelanggaran/fetchData', (body) =>
    pelanggaran.pelanggaran(body),
  );

  mountCrudRoutes(
    router,
    'petaStatusKontak',
    service(PetaStatusKontak, PetaStatusKontakService),
  );

  const portalBerita = service(PortalBerita, PortalBeritaService);
  mountCrudRoutes(router, 'portalBerita', portalBerita);
  mountReadRoute(router, 'beranda/berita', () => portalBerita.berita());

  mountCrudRoutes(
    router,
    'saranaPrasarana',
    service(SaranaPrasarana, SaranaPrasaranaService),
  );

  const schoolProfileService = service(SchoolProfile, SchoolProfileService);
  mountCrudRoutes(router, 'schoolProfile', {
    findAll: () => schoolProfileService.findAll(),
    register: (body) => schoolProfileService.registerSchoolProfile(body),
    delete: (id) => schoolProfileService.deleteSchoolProfile(id),
  });
  mountReadRoute(router, 'beranda/kepalaSekolah', () =>
    schoolProfileService.kepalaSekolah(),
  );
  mountReadRoute(router, 'strukturOrganisasi/fetch', () =>
    schoolProfileService.strukturOrganisasi(),
  );
  mountReadRoute(router, 'visiMisi/fetch', () =>
    schoolProfileService.visiMisi(),
  );
  mountReadRoute(router, 'kalenderAkademik/fetch', () =>
    schoolProfileService.kalenderAkademik(),
  );

  mountCrudRoutes(router, 'siswa', service(Siswa, SiswaService));
  mountCrudRoutes(router, 'tataTertib', service(TataTertib, TataTertibService));
  mountCrudRoutes(router, 'tbsm', service(Tbsm, TbsmService));
  mountCrudRoutes(
    router,
    'tenagaKependidikan',
    service(TenagaKependidikan, TenagaKependidikanService),
  );
  mountCrudRoutes(
    router,
    'tenagaPendidik',
    service(TenagaPendidik, TenagaPendidikService),
  );
  mountCrudRoutes(router, 'tkj', service(Tkj, TkjService));
  mountCrudRoutes(router, 'trko', service(Trko, TrkoService));

  const userService = service(User, UserService);
  router.post('/user/verify', async (request: Request, response, next) => {
    try {
      const result = await userService.findOne(request.body);
      if (result?.name && result?.role) {
        response.json({
          status: 'SUCCESS',
          data: { name: result.name, role: result.role },
        });
      } else {
        response.json({ status: 'INVALID_CREDENTIAL' });
      }
    } catch (error) {
      next(error);
    }
  });
  mountDataRoute(
    router,
    'user/registerUser',
    async (body) => (await userService.registerUser(body))?.data,
  );
  mountReadRoute(
    router,
    'user/fetchAdmin',
    async () => (await userService.findAllAdmin())?.data,
  );
  mountReadRoute(
    router,
    'user/fetchGuru',
    async () => (await userService.findAllGuru())?.data,
  );
  mountDataRoute(
    router,
    'user/deleteUser',
    async (body) => (await userService.deleteUser(body))?.data,
  );

  return router;
}
