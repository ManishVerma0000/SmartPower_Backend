import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/register';
import { LoginUserDto } from './dto/login';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const response = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      line: createUserDto.line,
      district: createUserDto.district,
    });
    return response;
  }
  async loginUser(loginUserDto: LoginUserDto) {
    const checkUserIsExist = await this.checkUserIsExist(loginUserDto.email);
    if (!checkUserIsExist) {
      throw Error('invalid user');
    }
    console.log(checkUserIsExist?.[0]);
    if (checkUserIsExist?.line == loginUserDto.line) {
      return checkUserIsExist?.[0];
    }
    throw Error('Invalid Password');
  }

  async checkUserIsExist(email: string) {
    const response = await this.userModel.findOne({
      email: email,
    });
    return response;
  }
}
