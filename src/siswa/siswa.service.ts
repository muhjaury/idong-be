import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Siswa } from './siswa.entity';

@Injectable()
export class SiswaService {
  constructor(
    @Inject('USER_REPOSITORY')
    private siswaRepository: Repository<Siswa>,
  ) {}

  findAll() {
    return this.siswaRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const kelas = data.kelas;
    const nis = data.nis;
    const nama = data.nama;
    const jenisKelamin = data.jenisKelamin;
    const alamat = data.alamat;

    if (id) {
      const updateQuery = `UPDATE siswa 
                            SET kelas="${kelas}", 
                            nis="${nis}", 
                            nama="${nama}", 
                            jenisKelamin="${jenisKelamin}", 
                            alamat="${alamat}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.siswaRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: nama };
      }
    } else {
      const insertQuery =
        'INSERT INTO siswa ( `kelas`, `nis`, `nama`, `jenisKelamin`, `alamat`) VALUES (' +
        `"${kelas}","${nis}","${nama}","${jenisKelamin}","${alamat}"` +
        ');';

      const executeInsertQuery = await this.siswaRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: nama };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.siswaRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
