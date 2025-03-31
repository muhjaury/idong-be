import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Trko } from './trko.entity';

@Injectable()
export class TrkoService {
  constructor(
    @Inject('USER_REPOSITORY')
    private trkoRepository: Repository<Trko>,
  ) {}

  findAll() {
    return this.trkoRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const deskripsi = data.deskripsi;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE trko 
                            SET deskripsi="${deskripsi}",
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.trkoRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: deskripsi };
      }
    } else {
      const insertQuery =
        'INSERT INTO trko ( `deskripsi`, `file`) VALUES (' +
        `"${deskripsi}","${file}"` +
        ');';

      const executeInsertQuery = await this.trkoRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: deskripsi };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.trkoRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
