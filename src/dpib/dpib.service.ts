import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Dpib } from './dpib.entity';

@Injectable()
export class DpibService {
  constructor(
    @Inject('USER_REPOSITORY')
    private dpibRepository: Repository<Dpib>,
  ) {}

  findAll() {
    return this.dpibRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const deskripsi = data.deskripsi;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE dpib 
                            SET deskripsi="${deskripsi}",
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.dpibRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: deskripsi };
      }
    } else {
      const insertQuery =
        'INSERT INTO dpib ( `deskripsi`, `file`) VALUES (' +
        `"${deskripsi}","${file}"` +
        ');';

      const executeInsertQuery = await this.dpibRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: deskripsi };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.dpibRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
