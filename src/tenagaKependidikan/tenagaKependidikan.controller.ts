import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { TenagaKependidikanService } from './tenagaKependidikan.service';

@Controller('api')
export class TenagaKependidikanController {
  constructor(private readonly profileService: TenagaKependidikanService) {}

  @Get('tenagaKependidikan/fetch')
  async findAllAdmin() {
    const init = await this.profileService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('tenagaKependidikan/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.profileService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('tenagaKependidikan/delete')
  async delete(@Body() id: number) {
    const init = await this.profileService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
