import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { TrkoService } from './trko.service';

@Controller('api')
export class TrkoController {
  constructor(private readonly trkoService: TrkoService) {}

  @Get('trko/fetch')
  async findAllAdmin() {
    const init = await this.trkoService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('trko/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.trkoService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('trko/delete')
  async delete(@Body() id: number) {
    const init = await this.trkoService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
