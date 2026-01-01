import { Injectable } from '@nestjs/common';
import { Score } from './interfaces/score.interface';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';

@Injectable()
export class ScoreService {
  private readonly scores: Score[] = [];

  create(createScore: CreateScoreDto): Score {
    const score: Score = {
      id: (this.scores.length + 1).toString(),
      ...createScore,
    };
    this.scores.push(score);
    return score;
  }

  findOne(id: string): Score {
    return this.scores.find((v) => v.id == id);
  }

  update(id: string, updateScore: UpdateScoreDto): Score {
    let scoreToUpdate = this.findOne(id);
    scoreToUpdate = { ...scoreToUpdate, ...updateScore };
    return scoreToUpdate;
  }

  findAll(): Score[] {
    return this.scores;
  }

  clearScores() {
    this.scores.length = 0;
  }
}
