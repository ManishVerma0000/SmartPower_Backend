import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/register';
import { LoginUserDto } from './dto/login';
import { ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const response = await this.userService.createUser(createUserDto);
      return {
        message: 'user is register successfully',
        data: response,
        statusCode: 200,
        success: 1,
      };
    } catch (error) {
      return {
        message: 'user is register successfully',
        data: error,
        statusCode: 400,
        success: 0,
      };
    }
  }

  @Post('/login')
  async login(@Body() createUserDto: LoginUserDto) {
    try {
      const response = await this.userService.loginUser(createUserDto);
      return {
        message: 'user is register successfully',
        data: response,
        statusCode: 200,
        success: 1,
      };
    } catch (error) {
      return {
        message: error.message,
        data: error,
        statusCode: 400,
        success: 0,
      };
    }
    // return
  }
}
