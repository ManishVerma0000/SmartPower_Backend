import { Injectable } from '@nestjs/common';
import { Line } from './schema/line.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LineService {
  constructor(
    @InjectModel(Line.name) private readonly lineModel: Model<Line>,
  ) {}

  async crateLine(createLine) {
    const response = await this.lineModel.create({
      lineName: createLine.lineName,
      district: createLine.district,
      powerHouse: createLine.powerHouse,
    });
    return response;
  }
}
