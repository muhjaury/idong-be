import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { TenagaPendidikService } from './tenagaPendidik.service';

@Controller('api')
export class TenagaPendidikController {
  constructor(private readonly tenagaPendidikService: TenagaPendidikService) {}

  @Get('tenagaPendidik/fetch')
  async findAllAdmin() {
    const init = await this.tenagaPendidikService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('tenagaPendidik/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.tenagaPendidikService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('tenagaPendidik/delete')
  async delete(@Body() id: number) {
    const init = await this.tenagaPendidikService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
