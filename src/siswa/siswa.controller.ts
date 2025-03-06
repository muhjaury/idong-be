import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSiswaDTO } from './dto/create-siswa.dto';
import { SiswaService } from './siswa.service';

@Controller('api')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get('siswa')
  async findAll(): Promise<object> {
    const init = await this.siswaService.findAll();
    const data = { status: 'SUCCESS', data: init };
    return data;
  }

  @Post('siswa/add')
  async create(@Body() dto: CreateSiswaDTO) {
    const init = await this.siswaService.create(dto);
    const data = { status: 'SUCCESS', data: init };
    return data;
  }
}
