import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LinemenService } from './linemen.service';
import {
  ERROR_MESSAGE,
  STATUS_CODE,
  SUCCESS_FAILED,
  Success_Message,
} from 'src/utils/constant';
import { CreateLineMen } from './dto/insertLineMen';
import { AddMessage } from './dto/addMessage';

@Controller('linemen')
export class LinemenController {
  constructor(private readonly lineMenService: LinemenService) {}

  @Post()
  async create(@Body() createLineMen: CreateLineMen) {
    try {
      const response = await this.lineMenService.createLineMen(createLineMen);
      return {
        message: Success_Message.LINEMEN_CREATED_SUCCESSFULLY,
        data: response,
        statusCode: STATUS_CODE.SUCCESS_CODE,
        success: SUCCESS_FAILED.SUCCESS,
      };
    } catch (error) {
      return {
        message: ERROR_MESSAGE.LINEMEN_CREATED_ERROR,
        data: error,
        statusCode: STATUS_CODE.BAD_REQUEST,
        success: SUCCESS_FAILED.FAILED,
      };
    }
  }

  @Post('/login')
  async loginUser(@Body() createLine: any) {
    try {
      const response = await this.lineMenService.loginLineMen(createLine);
      return {
        message: Success_Message.LINEMEN_LOGGED_IN_SUCCESSFULLY,
        data: response,
        statusCode: STATUS_CODE.SUCCESS_CODE,
        success: SUCCESS_FAILED.SUCCESS,
      };
    } catch (error) {
      return {
        message: ERROR_MESSAGE.LINEMEN_CREATED_ERROR,
        data: error,
        statusCode: STATUS_CODE.BAD_REQUEST,
        success: SUCCESS_FAILED.FAILED,
      };
    }
  }

  @Post('/message')
  async addMessage(@Body() addMessage: AddMessage) {
    try {
      console.log(addMessage, 'addmessages');
      const response = await this.lineMenService.addMessage(addMessage);
      return {
        message: Success_Message.MESSAGE_CREATED_SUCCESSFULLY,
        data: response,
        statusCode: STATUS_CODE.SUCCESS_CODE,
        success: SUCCESS_FAILED.SUCCESS,
      };
    } catch (error) {
      return {
        message: ERROR_MESSAGE.MESSAGE_CREATED_SUCCESSFULLY_ERROR,
        data: error,
        statusCode: STATUS_CODE.BAD_REQUEST,
        success: SUCCESS_FAILED.FAILED,
      };
    }
  }

  @Get('/messages')
  async messages() {
    try {
      const response = await this.lineMenService.messages();
      return {
        message: Success_Message.MESSAGE_CREATED_SUCCESSFULLY,
        data: response,
        statusCode: STATUS_CODE.SUCCESS_CODE,
        success: SUCCESS_FAILED.SUCCESS,
      };
    } catch (error) {
      return {
        message: ERROR_MESSAGE.MESSAGE_CREATED_SUCCESSFULLY_ERROR,
        data: error,
        statusCode: STATUS_CODE.BAD_REQUEST,
        success: SUCCESS_FAILED.FAILED,
      };
    }
  }
}
