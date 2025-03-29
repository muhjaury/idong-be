import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { SaranaPrasarana } from './saranaPrasarana.entity';

@Injectable()
export class SaranaPrasaranaService {
  constructor(
    @Inject('USER_REPOSITORY')
    private saranaPrasaranaRepository: Repository<SaranaPrasarana>,
  ) {}

  findAll() {
    return this.saranaPrasaranaRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const nama = data.nama;
    const foto = data.foto;

    if (id) {
      const updateQuery = `UPDATE sarana_prasarana 
                            SET nama="${nama}",
                            foto="${foto}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.saranaPrasaranaRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: nama };
      }
    } else {
      const insertQuery =
        'INSERT INTO sarana_prasarana ( `nama`, `foto`) VALUES (' +
        `"${nama}","${foto}"` +
        ');';

      const executeInsertQuery =
        await this.saranaPrasaranaRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: nama };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.saranaPrasaranaRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
