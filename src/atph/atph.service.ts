import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Atph } from './atph.entity';

@Injectable()
export class AtphService {
  constructor(
    @Inject('USER_REPOSITORY')
    private atphRepository: Repository<Atph>,
  ) {}

  findAll() {
    return this.atphRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const deskripsi = data.deskripsi;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE atph 
                            SET deskripsi="${deskripsi}",
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.atphRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: deskripsi };
      }
    } else {
      const insertQuery =
        'INSERT INTO atph ( `deskripsi`, `file`) VALUES (' +
        `"${deskripsi}","${file}"` +
        ');';

      const executeInsertQuery = await this.atphRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: deskripsi };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.atphRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
