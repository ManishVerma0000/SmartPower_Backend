import { Body, Controller, Post } from '@nestjs/common';
import { LineService } from './line.service';
import { CreateLine } from './dto/createline';
import {
  ERROR_MESSAGE,
  STATUS_CODE,
  SUCCESS_FAILED,
  Success_Message,
} from 'src/utils/constant';

@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async create(@Body() createLine: CreateLine) {
    try {
      const response = await this.lineService.crateLine(createLine);
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
}
