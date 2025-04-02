import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { TataTertibService } from './tataTertib.service';

@Controller('api')
export class TataTertibController {
  constructor(private readonly tataTertibService: TataTertibService) {}

  @Get('tataTertib/fetch')
  async findAllAdmin() {
    const init = await this.tataTertibService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('tataTertib/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.tataTertibService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('tataTertib/delete')
  async delete(@Body() id: number) {
    const init = await this.tataTertibService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
