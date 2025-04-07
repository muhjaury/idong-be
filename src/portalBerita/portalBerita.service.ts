import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
import { PortalBerita } from './portalBerita.entity';

@Injectable()
export class PortalBeritaService {
  constructor(
    @Inject('USER_REPOSITORY')
    private portalBeritaRepository: Repository<PortalBerita>,
  ) {}

  findAll() {
    return this.portalBeritaRepository.find();
  }

  async register(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const judul = data.judul;
    const deskripsi = data.deskripsi;
    const foto = data.foto;

    if (id) {
      const updateQuery = `UPDATE portal_berita 
                            SET judul="${judul}",
                            deskripsi="${deskripsi}",
                            foto="${foto}" 
                            WHERE id=${id}`;
      const executeUpdateQuery =
        await this.portalBeritaRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: judul };
      }
    } else {
      const insertQuery =
        'INSERT INTO portal_berita ( `judul`, `deskripsi`, `foto`) VALUES (' +
        `"${judul}","${deskripsi}","${foto}"` +
        ');';

      const executeInsertQuery =
        await this.portalBeritaRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: judul };
      }
    }

    return { data: null };
  }

  async delete(id: number) {
    const executeQuery = await this.portalBeritaRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }

  async berita() {
    const query =
      'SELECT `judul`, `deskripsi`, `foto` FROM portal_berita ORDER BY `id` DESC;';
    const executeQuery = await this.portalBeritaRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }
}
