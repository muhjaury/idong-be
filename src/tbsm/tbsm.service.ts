import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Tbsm } from './tbsm.entity';

@Injectable()
export class TbsmService {
  constructor(
    @Inject('USER_REPOSITORY')
    private tbsmRepository: Repository<Tbsm>,
  ) {}

  findAll() {
    return this.tbsmRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const deskripsi = data.deskripsi;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE tbsm 
                            SET deskripsi="${deskripsi}",
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.tbsmRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: deskripsi };
      }
    } else {
      const insertQuery =
        'INSERT INTO tbsm ( `deskripsi`, `file`) VALUES (' +
        `"${deskripsi}","${file}"` +
        ');';

      const executeInsertQuery = await this.tbsmRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: deskripsi };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.tbsmRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
