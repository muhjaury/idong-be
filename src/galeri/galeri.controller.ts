import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { GaleriService } from './galeri.service';

@Controller('api')
export class GaleriController {
  constructor(private readonly galeriService: GaleriService) {}

  @Get('galeri/fetch')
  async findAllAdmin() {
    const init = await this.galeriService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('galeri/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.galeriService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('galeri/delete')
  async delete(@Body() id: number) {
    const init = await this.galeriService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
