import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { PortalBeritaService } from './portalBerita.service';

@Controller('api')
export class PortalBeritaController {
  constructor(private readonly portalBeritaService: PortalBeritaService) {}

  @Get('portalBerita/fetch')
  async findAllAdmin() {
    const init = await this.portalBeritaService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('portalBerita/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.portalBeritaService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('portalBerita/delete')
  async delete(@Body() id: number) {
    const init = await this.portalBeritaService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
