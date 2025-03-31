import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Arsip } from './arsip.entity';

@Injectable()
export class ArsipService {
  constructor(
    @Inject('USER_REPOSITORY')
    private arsipRepository: Repository<Arsip>,
  ) {}

  findAll() {
    return this.arsipRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const nama = data.nama;
    const foto = data.foto;

    if (id) {
      const updateQuery = `UPDATE arsip 
                            SET nama="${nama}",
                            foto="${foto}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.arsipRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: nama };
      }
    } else {
      const insertQuery =
        'INSERT INTO arsip ( `nama`, `foto`) VALUES (' +
        `"${nama}","${foto}"` +
        ');';

      const executeInsertQuery = await this.arsipRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: nama };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.arsipRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
