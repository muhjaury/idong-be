import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Pelanggaran } from './pelanggaran.entity';

@Injectable()
export class PelanggaranService {
  constructor(
    @Inject('USER_REPOSITORY')
    private pelanggaranRepository: Repository<Pelanggaran>,
  ) {}

  findAll() {
    return this.pelanggaranRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const nis = data.nis;
    const pelanggaran = data.pelanggaran;

    if (id) {
      const updateQuery = `UPDATE pelanggaran 
                            SET nis="${nis}", 
                            pelanggaran="${pelanggaran}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.pelanggaranRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: nis };
      }
    } else {
      const insertQuery =
        'INSERT INTO pelanggaran ( `nis`, `pelanggaran`) VALUES (' +
        `"${nis}","${pelanggaran}"` +
        ');';

      const executeInsertQuery =
        await this.pelanggaranRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: nis };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.pelanggaranRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }

  async pelanggaran(dto: DataDTO) {
    const data = extactData(dto);

    const nis = data.nis;

    const query = `SELECT * FROM pelanggaran WHERE nis="${nis}";`;
    const executeQuery = await this.pelanggaranRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }
}
