import { Body, Controller, Post } from '@nestjs/common';
import { SuperAdminService } from './super-admin.service';
import { createSuperAdminDto } from './dto/createSuperAdmin';
import { loginSuperAdminDto } from './dto/loginSuperAdmin';
import { ERROR_MESSAGE, Success_Message } from 'src/utils/constant';

@Controller('super-admin')
export class SuperAdminController {
  constructor(private readonly superAdminServices: SuperAdminService) {}
  @Post()
  async create(@Body() requestBody: createSuperAdminDto) {
    try {
      const response = await this.superAdminServices.createUser(requestBody);
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
  async login(@Body() requestBody: loginSuperAdminDto) {
    try {
      const response =
        await this.superAdminServices.loginSuperAdmin(requestBody);
      return {
        message: Success_Message.USER_LOGGED_IN,
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
  }
}
