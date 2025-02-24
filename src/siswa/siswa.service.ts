import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Siswa } from './siswa.entity';
import { CreateSiswaDTO } from './dto/create- siswa.dto';

@Injectable()
export class SiswaService {
  constructor(
    @Inject('SISWA_REPOSITORY')
    private siswaRepository: Repository<Siswa>,
  ) {}

  findAll(): Promise<Siswa[]> {
    return this.siswaRepository.find();
  }

  findOne(id: number): Promise<Siswa | null> {
    return this.siswaRepository.findOneBy({ id });
  }

  async create(dto: CreateSiswaDTO) {
    const init = this.siswaRepository.create(dto);
    return await this.siswaRepository.save(init);
  }

  async remove(id: number): Promise<void> {
    await this.siswaRepository.delete(id);
  }
}
