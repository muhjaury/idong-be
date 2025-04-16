import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { DaftarHadir } from './daftarHadir.entity';

@Injectable()
export class DaftarHadirService {
  constructor(
    @Inject('USER_REPOSITORY')
    private daftarHadirRepository: Repository<DaftarHadir>,
  ) {}

  findAll() {
    return this.daftarHadirRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const kelas = data.kelas;
    const jurusan = data.jurusan;
    const tahunAjar = data.tahunAjar;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE daftar_hadir 
                            SET kelas="${kelas}", 
                            jurusan="${jurusan}", 
                            tahunAjar="${tahunAjar}", 
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.daftarHadirRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: kelas };
      }
    } else {
      const insertQuery =
        'INSERT INTO daftar_hadir ( `kelas`, `jurusan`, `tahunAjar`, `file`) VALUES (' +
        `"${kelas}","${jurusan}","${tahunAjar}","${file}"` +
        ');';

      const executeInsertQuery =
        await this.daftarHadirRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: kelas };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.daftarHadirRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }

  async daftarHadir(dto: DataDTO) {
    const data = extactData(dto);

    const jurusan = data.jurusan;
    const kelas = data.kelas;
    const tahunAjar = data.tahunAjar;

    const query = `SELECT * FROM daftar_hadir WHERE jurusan="${jurusan}" AND kelas="${kelas}" AND tahunAjar="${tahunAjar}";`;
    const executeQuery = await this.daftarHadirRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }
}
