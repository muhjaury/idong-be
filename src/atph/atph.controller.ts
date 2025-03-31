import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { AtphService } from './atph.service';

@Controller('api')
export class AtphController {
  constructor(private readonly atphService: AtphService) {}

  @Get('atph/fetch')
  async findAllAdmin() {
    const init = await this.atphService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('atph/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.atphService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('atph/delete')
  async delete(@Body() id: number) {
    const init = await this.atphService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
