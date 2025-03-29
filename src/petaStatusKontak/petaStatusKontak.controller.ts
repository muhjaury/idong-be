import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { PetaStatusKontakService } from './petaStatusKontak.service';

@Controller('api')
export class PetaStatusKontakController {
  constructor(
    private readonly petaStatusKontakService: PetaStatusKontakService,
  ) {}

  @Get('petaStatusKontak/fetch')
  async findAllAdmin() {
    const init = await this.petaStatusKontakService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('petaStatusKontak/register')
  async register(@Body() dto: DataDTO) {
    const init = await this.petaStatusKontakService.register(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('petaStatusKontak/delete')
  async delete(@Body() id: number) {
    const init = await this.petaStatusKontakService.delete(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
