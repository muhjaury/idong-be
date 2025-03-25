import { Body, Controller, Post } from '@nestjs/common';
import { SchoolProfileDTO } from './dto/schoolProfile.dto';
import { SchoolProfileService } from './schoolProfile.service';

@Controller('api')
export class SchoolProfileController {
  constructor(private readonly profileService: SchoolProfileService) {}

  @Post('registerSchoolProfile')
  async registerSchoolProfile(@Body() dto: SchoolProfileDTO) {
    const init = await this.profileService.registerSchoolProfile(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
