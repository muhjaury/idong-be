import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { TkjService } from './tkj.service';

@Controller('api')
export class TkjController {
  constructor(private readonly tkjService: TkjService) {}

  @Get('tkj/fetch')
  async findAllAdmin() {
    const init = await this.tkjService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('tkj/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.tkjService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('tkj/delete')
  async delete(@Body() id: number) {
    const init = await this.tkjService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
