import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { createAdminDto } from './dto/createAdmin';
import { loginAdminDto } from './dto/loginAdmin';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post()
  async create(@Body() requestBody: createAdminDto) {
    try {
      const response = await this.adminService.createAdmin(requestBody);
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
  async login(@Body() requestBody: loginAdminDto) {
    try {
      const response = await this.adminService.loginAdmin(requestBody);
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
}
