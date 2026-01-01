import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { ListAllScore } from './dto/list-all-score.dto';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  service: ScoreService;

  constructor(scoreService: ScoreService) {
    this.service = scoreService;
  }

  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    this.service.create(createScoreDto);
    return 'This action adds a new score';
  }

  @Get()
  findAll(@Query() query: ListAllScore) {
    return `This action returns all scores (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} score`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
    this.service.update(id, updateScoreDto);
    return `This action updates a #${id} score`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} score`;
  }
}
