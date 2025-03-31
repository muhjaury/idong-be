import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Tkj } from './tkj.entity';

@Injectable()
export class TkjService {
  constructor(
    @Inject('USER_REPOSITORY')
    private tkjRepository: Repository<Tkj>,
  ) {}

  findAll() {
    return this.tkjRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const deskripsi = data.deskripsi;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE tkj 
                            SET deskripsi="${deskripsi}",
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.tkjRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: deskripsi };
      }
    } else {
      const insertQuery =
        'INSERT INTO tkj ( `deskripsi`, `file`) VALUES (' +
        `"${deskripsi}","${file}"` +
        ');';

      const executeInsertQuery = await this.tkjRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: deskripsi };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.tkjRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
