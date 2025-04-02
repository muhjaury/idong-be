import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { TataTertib } from './tataTertib.entity';

@Injectable()
export class TataTertibService {
  constructor(
    @Inject('USER_REPOSITORY')
    private tataTertibRepository: Repository<TataTertib>,
  ) {}

  findAll() {
    return this.tataTertibRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const nama = data.nama;
    const file = data.file;

    if (id) {
      const updateQuery = `UPDATE tata_tertib 
                            SET nama="${nama}",
                            file="${file}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.tataTertibRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: nama };
      }
    } else {
      const insertQuery =
        'INSERT INTO tata_tertib ( `nama`, `file`) VALUES (' +
        `"${nama}","${file}"` +
        ');';

      const executeInsertQuery =
        await this.tataTertibRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: nama };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.tataTertibRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
