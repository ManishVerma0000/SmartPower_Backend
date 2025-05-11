import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SuperAdmin } from './schema/super-admin.schema';
import { createSuperAdminDto } from './dto/createSuperAdmin';
import { loginSuperAdminDto } from './dto/loginSuperAdmin';
import { ERROR_MESSAGE, Success_Message } from 'src/utils/constant';

@Injectable()
export class SuperAdminService {
  constructor(
    @InjectModel(SuperAdmin.name)
    private readonly superAdminModel: Model<SuperAdmin>,
  ) {}

  async createUser(createUserDto: createSuperAdminDto) {
    const response = await this.superAdminModel.create({
      email: createUserDto.email,
      password: createUserDto.password,
      state: createUserDto.state,
    });
    return response;
  }

  async loginSuperAdmin(requestBody: loginSuperAdminDto) {
    const isUserExist = await this.superAdminModel.findOne({
      email: requestBody.email,
    });
    if (isUserExist) {
      if (isUserExist.password === requestBody.password) {
        return Success_Message.USER_LOGGED_IN;
      } else {
        throw new Error(ERROR_MESSAGE.INVALID_USER);
      }
    }
  }
}
