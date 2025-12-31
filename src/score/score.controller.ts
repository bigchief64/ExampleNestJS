import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ListAllScore } from './dto/list-all-score.dto';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';

@Controller('score')
export class ScoreController {
  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    this.create(createScoreDto);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllScore) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} score`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
    this.update(id, updateScoreDto);
    return `This action updates a #${id} score`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} score`;
  }
}
