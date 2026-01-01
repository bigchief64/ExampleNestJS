import { TestingModule, Test } from '@nestjs/testing';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import { Score } from './interfaces/score.interface';
import { CreateScoreDto } from './dto/create-score.dto';

const createMockSong1 = {
  name: 'Groovin',
  data: 'I was walking along, singing a song...',
  type: 'guitar tab',
};
describe('ScoreService', () => {
  let score: TestingModule;
  let scoreService: ScoreService;
  beforeAll(async () => {
    score = await Test.createTestingModule({
      controllers: [ScoreController],
      providers: [ScoreService],
    }).compile();

    scoreService = score.get<ScoreService>(ScoreService);
  });

  beforeEach(() => {
    scoreService.clearScores();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    it('should create and return a score', () => {
      expect(scoreService.create(createMockSong1 as CreateScoreDto)).toEqual({
        id: '1',
        name: 'Groovin',
        data: 'I was walking along, singing a song...',
        type: 'guitar tab',
      } as Score);
    });
  });

  describe('findOne', () => {
    it('should return a score by id', () => {
      scoreService.create(createMockSong1 as CreateScoreDto);
      expect(scoreService.findOne('1')).toEqual({
        id: '1',
        name: 'Groovin',
        data: 'I was walking along, singing a song...',
        type: 'guitar tab',
      } as Score);
    });
  });

  describe('update', () => {
    it('should update and return the score', () => {
      scoreService.create(createMockSong1 as CreateScoreDto);
      expect(
        scoreService.update('1', {
          name: 'Groovin',
          data: 'I was walking along, singing a new song...',
          type: 'standard notation',
        }),
      ).toEqual({
        id: '1',
        name: 'Groovin',
        data: 'I was walking along, singing a new song...',
        type: 'standard notation',
      } as Score);
    });
  });

  describe('findAll', () => {
    it('should return all scores', () => {
      scoreService.create(createMockSong1 as CreateScoreDto);
      scoreService.create({
        name: 'Song2',
        data: 'I was walking along, singing a different song...',
        type: 'lead sheet',
      });

      expect(scoreService.findAll()).toEqual([
        {
          id: '1',
          name: 'Groovin',
          data: 'I was walking along, singing a song...',
          type: 'guitar tab',
        } as Score,
        {
          id: '2',
          name: 'Song2',
          data: 'I was walking along, singing a different song...',
          type: 'lead sheet',
        } as Score,
      ]);
    });
  });
});
