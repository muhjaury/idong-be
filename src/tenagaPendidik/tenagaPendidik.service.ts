import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { TenagaPendidik } from './tenagaPendidik.entity';

@Injectable()
export class TenagaPendidikService {
  constructor(
    @Inject('USER_REPOSITORY')
    private tenagaPendidikRepository: Repository<TenagaPendidik>,
  ) {}

  findAll() {
    return this.tenagaPendidikRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const nama = data.nama;
    const deskripsi = data.deskripsi;
    const foto = data.foto;

    if (id) {
      const updateQuery = `UPDATE tenaga_pendidik 
                            SET nama="${nama}",
                            deskripsi="${deskripsi}",
                            foto="${foto}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.tenagaPendidikRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: nama };
      }
    } else {
      const insertQuery =
        'INSERT INTO tenaga_pendidik ( `nama`, `deskripsi`, `foto`) VALUES (' +
        `"${nama}","${deskripsi}","${foto}"` +
        ');';

      const executeInsertQuery =
        await this.tenagaPendidikRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: nama };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.tenagaPendidikRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
