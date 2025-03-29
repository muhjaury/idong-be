import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { PetaStatusKontak } from './petaStatusKontak.entity';

@Injectable()
export class PetaStatusKontakService {
  constructor(
    @Inject('USER_REPOSITORY')
    private petaStatusKontakRepository: Repository<PetaStatusKontak>,
  ) {}

  findAll() {
    return this.petaStatusKontakRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const lokasi = data.lokasi;
    const nomorTelepon = data.nomorTelepon;
    const email = data.email;
    const instagram = data.instagram;
    const facebook = data.facebook;
    const maps = data.maps;

    if (id) {
      const updateQuery = `UPDATE peta_status_kontak 
                            SET lokasi="${lokasi}",
                            nomorTelepon="${nomorTelepon}",
                            email="${email}",
                            instagram="${instagram}",
                            facebook="${facebook}",
                            maps="${maps}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.petaStatusKontakRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: lokasi };
      }
    } else {
      const insertQuery =
        'INSERT INTO peta_status_kontak ( `lokasi`, `nomorTelepon`, `email`, `instagram`, `facebook`, `maps`) VALUES (' +
        `"${lokasi}","${nomorTelepon}","${email}","${instagram}","${facebook}","${maps}"` +
        ');';

      const executeInsertQuery =
        await this.petaStatusKontakRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: lokasi };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.petaStatusKontakRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
