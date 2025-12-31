import { Injectable } from '@nestjs/common';
import { Score } from './interfaces/score.interface';

@Injectable()
export class ScoreService {
  private readonly scores: Score[] = [];

  create(score: Score) {
    this.scores.push(score);
  }

  findOne(id: string): Score {
    return this.scores.find((v) => v.id == id);
  }

  update(id: string, score: Score): Score {
    let scoreToUpdate = this.findOne(id);
    scoreToUpdate = score;
    return scoreToUpdate;
  }

  findAll(): Score[] {
    return this.scores;
  }
}
