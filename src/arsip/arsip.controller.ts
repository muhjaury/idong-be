import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { ArsipService } from './arsip.service';

@Controller('api')
export class ArsipController {
  constructor(private readonly arsipService: ArsipService) {}

  @Get('arsip/fetch')
  async findAllAdmin() {
    const init = await this.arsipService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('arsip/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.arsipService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('arsip/delete')
  async delete(@Body() id: number) {
    const init = await this.arsipService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
