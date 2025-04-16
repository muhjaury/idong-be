import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { DaftarHadirService } from './daftarHadir.service';

@Controller('api')
export class DaftarHadirController {
  constructor(private readonly daftarHadirService: DaftarHadirService) {}

  @Get('daftarHadir/fetch')
  async findAllAdmin() {
    const init = await this.daftarHadirService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('daftarHadir/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.daftarHadirService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('daftarHadir/delete')
  async delete(@Body() id: number) {
    const init = await this.daftarHadirService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('daftarHadir/fetchData')
  async daftarHadir(@Body() dto: DataDTO) {
    const init = await this.daftarHadirService.daftarHadir(dto);
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }
}
