import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { SiswaService } from './siswa.service';

@Controller('api')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get('siswa/fetch')
  async findAllAdmin() {
    const init = await this.siswaService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('siswa/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.siswaService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('siswa/delete')
  async delete(@Body() id: number) {
    const init = await this.siswaService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
