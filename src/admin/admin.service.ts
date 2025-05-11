import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schema/admin.schema';
import { createAdminDto } from './dto/createAdmin';
import { loginAdminDto } from './dto/loginAdmin';
import { ERROR_MESSAGE, Success_Message } from 'src/utils/constant';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<Admin>,
  ) {}

  async createAdmin(createAdmin: createAdminDto) {
    const response = await this.adminModel.create({
      email: createAdmin.email,
      password: createAdmin.password,
      state: createAdmin.state,
      district: createAdmin.district,
    });
    return response;
  }
  async loginAdmin(requestBody: loginAdminDto) {
    const isUserExist = await this.adminModel.findOne({
      email: requestBody.email,
    });
    if (isUserExist) {
      if (isUserExist.password === requestBody.password) {
        return isUserExist;
      } else {
        throw new Error(ERROR_MESSAGE.INVALID_USER);
      }
    }
  }
}
