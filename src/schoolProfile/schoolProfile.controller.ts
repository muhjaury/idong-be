import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataDTO } from '../dto/data.dto';
import { SchoolProfileService } from './schoolProfile.service';

@Controller('api')
export class SchoolProfileController {
  constructor(private readonly schoolProfileService: SchoolProfileService) {}

  @Get('fetchSchoolProfile')
  async findAllAdmin() {
    const init = await this.schoolProfileService.findAll();
    if (init) {
      return { status: 'SUCCESS', data: init };
    }
    return { status: 'ERROR' };
  }

  @Post('registerSchoolProfile')
  async registerSchoolProfile(@Body() dto: DataDTO) {
    const init = await this.schoolProfileService.registerSchoolProfile(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }

  @Post('deleteSchoolProfile')
  async deleteSchoolProfile(@Body() id: number) {
    const init = await this.schoolProfileService.deleteSchoolProfile(id);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
