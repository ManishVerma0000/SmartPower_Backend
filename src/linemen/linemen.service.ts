import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LineMen } from './schema/linemen.schema';
import { Model } from 'mongoose';
import { ERROR_MESSAGE } from 'src/utils/constant';
import { AddMessage } from './dto/addMessage';
import { Message } from './schema/message.schema';
import { endOfDay, startOfDay } from 'src/utils/date.utils';

@Injectable()
export class LinemenService {
  @InjectModel(LineMen.name) private readonly lineMenModel: Model<LineMen>;
  @InjectModel(Message.name) private readonly messageModel: Model<Message>;
  async createLineMen(createLineMen) {
    const response = await this.lineMenModel.create({
      name: createLineMen.name,
      email: createLineMen.email,
      profileImageUrl: createLineMen?.profileImageUrl,
      line: createLineMen.line,
      state: createLineMen.state,
      district: createLineMen.district,
      password: createLineMen.password,
    });
    return response;
  }

  async loginLineMen(loginLineMen) {
    const userExist = await this.lineMenModel.findOne({
      email: loginLineMen.email,
    });
    if (!userExist) {
      throw Error(ERROR_MESSAGE.INVALID_USER);
    }
    if (userExist?.password == loginLineMen.password) {
      return userExist;
    } else {
      throw Error(ERROR_MESSAGE.INVALID_USER);
    }
  }

  async addMessage(addMessage: AddMessage) {
    const response = await this.messageModel.create({
      message: addMessage.message,
      description: addMessage.description,
      line: addMessage.line,
      linemen: addMessage.lineMen,
      imageUrl: addMessage.imageUrl,
      timeIn: addMessage.timeIn,
      timeOut: addMessage.timeOut,
    });
    return response;
  }

  async messages() {
    const startDay = startOfDay;
    const endDay = endOfDay;
    const response = await this.messageModel.find({
      date: {
        $gte: startDay,
        $lte: endDay,
      },
    });
    return response;
  }
}
