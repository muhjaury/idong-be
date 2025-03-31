import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { Galeri } from './galeri.entity';

@Injectable()
export class GaleriService {
  constructor(
    @Inject('USER_REPOSITORY')
    private galeriRepository: Repository<Galeri>,
  ) {}

  findAll() {
    return this.galeriRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const judul = data.judul;
    const deskripsi = data.deskripsi;
    const foto = data.foto;

    if (id) {
      const updateQuery = `UPDATE galeri 
                            SET judul="${judul}",
                            deskripsi="${deskripsi}",
                            foto="${foto}" 
                            WHERE id=${id}`;
      const executeUpdateQuery = await this.galeriRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: judul };
      }
    } else {
      const insertQuery =
        'INSERT INTO galeri ( `judul`, `deskripsi`, `foto`) VALUES (' +
        `"${judul}","${deskripsi}","${foto}"` +
        ');';

      const executeInsertQuery = await this.galeriRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: judul };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.galeriRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
