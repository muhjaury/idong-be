import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { DpibService } from './dpib.service';

@Controller('api')
export class DpibController {
  constructor(private readonly dpibService: DpibService) {}

  @Get('dpib/fetch')
  async findAllAdmin() {
    const init = await this.dpibService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('dpib/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.dpibService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('dpib/delete')
  async delete(@Body() id: number) {
    const init = await this.dpibService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
