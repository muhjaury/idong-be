import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { PelanggaranService } from './pelanggaran.service';

@Controller('api')
export class PelanggaranController {
  constructor(private readonly pelanggaranService: PelanggaranService) {}

  @Get('pelanggaran/fetch')
  async findAllAdmin() {
    const init = await this.pelanggaranService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('pelanggaran/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.pelanggaranService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('pelanggaran/delete')
  async delete(@Body() id: number) {
    const init = await this.pelanggaranService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('pelanggaran/fetchData')
  async daftarHadir(@Body() dto: DataDTO) {
    const init = await this.pelanggaranService.pelanggaran(dto);
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }
}
