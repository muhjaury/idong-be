import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDTO, VerifyUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Post('user/verify')
  async findOne(@Body() dto: VerifyUserDTO) {
    const init = await this.userService.findOne(dto);
    if (init?.name && init?.role) {
      return { status: 'SUCCESS', data: { name: init.name, role: init.role } };
    }
    return { status: 'INVALID_CREDENTIAL' };
  }

  @Post('user/registerAdmin')
  async registerAdmin(@Body() dto: UserDTO) {
    const init = await this.userService.registerAdmin(dto);
    if (init?.data) {
      return { status: 'SUCCESS', data: init.data };
    }
    return { status: 'ERROR' };
  }
}
