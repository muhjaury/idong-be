import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { TbsmService } from './tbsm.service';

@Controller('api')
export class TbsmController {
  constructor(private readonly tbsmService: TbsmService) {}

  @Get('tbsm/fetch')
  async findAllAdmin() {
    const init = await this.tbsmService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('tbsm/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.tbsmService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('tbsm/delete')
  async delete(@Body() id: number) {
    const init = await this.tbsmService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
