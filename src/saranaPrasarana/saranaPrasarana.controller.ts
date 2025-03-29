import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { SaranaPrasaranaService } from './saranaPrasarana.service';

@Controller('api')
export class SaranaPrasaranaController {
  constructor(
    private readonly saranaPrasaranaService: SaranaPrasaranaService,
  ) {}

  @Get('saranaPrasarana/fetch')
  async findAllAdmin() {
    const init = await this.saranaPrasaranaService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('saranaPrasarana/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.saranaPrasaranaService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('saranaPrasarana/delete')
  async delete(@Body() id: number) {
    const init = await this.saranaPrasaranaService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
