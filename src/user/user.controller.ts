import { Body, Controller, Get, Post, Res, HttpCode } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async findAll(): Promise<object> {
    const init = await this.userService.findAll();
    const data = { status: 'SUCCESS', data: init };
    return data;
  }

  @Post('user/add')
  async create(@Body() dto: CreateUserDTO) {
    const init = await this.userService.create(dto);
    const data = { status: 'SUCCESS', data: init };
    return data;
  }

  @HttpCode(200)
  @Post('verifyUser')
  async findOne(
    @Body() dto: CreateUserDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<object> {
    const init = await this.userService.findOne(dto);
    if (init) {
      // res.status(200);
      return { status: 'SUCCESS' };
    }
    return { status: 'INVALID_CREDENTIAL' };
  }
}
