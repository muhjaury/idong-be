import { Controller, Get, Post, Body } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { CreateSiswaDTO } from './dto/create- siswa.dto';

@Controller('api')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get('siswa')
  findAll(): object {
    return this.siswaService.findAll();
  }

  @Post('siswa/add')
  create(@Body() dto: CreateSiswaDTO) {
    this.siswaService.create(dto);
    const data = { status: 'SUCCESS', data: dto };
    return data;
  }
}
