import { Test, TestingModule } from '@nestjs/testing';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

describe('ScoreController', () => {
  let score: TestingModule;
  beforeAll(async () => {
    score = await Test.createTestingModule({
      controllers: [ScoreController],
      providers: [ScoreService],
    }).compile();
  });

  describe('create', () => {
    it('should return "This action adds a new score"', () => {
      const scoreController = score.get(ScoreController);
      expect(
        scoreController.create({
          name: 'Groovin',
          data: 'I was walking along, singing a song...',
          type: 'guitar tab',
        }),
      ).toBe('This action adds a new score');
    });
  });

  describe('findAll', () => {
    it('should return "This action returns all scores (limit: 10 items)"', () => {
      const scoreController = score.get(ScoreController);
      expect(scoreController.findAll({ limit: 10 })).toBe(
        'This action returns all scores (limit: 10 items)',
      );
    });
  });

  describe('findOne', () => {
    it('should return "This action returns a #1 score"', () => {
      const scoreController = score.get(ScoreController);
      expect(scoreController.findOne('1')).toBe(
        'This action returns a #1 score',
      );
    });
  });

  describe('update', () => {
    it('should return "This action updates a #1 score"', () => {
      const scoreController = score.get(ScoreController);
      expect(
        scoreController.update('1', {
          name: 'Groovin',
          data: 'I was walking along, singing a new song...',
          type: 'standard notation',
        }),
      ).toBe('This action updates a #1 score');
    });
  });

  describe('remove', () => {
    it('should return "This action removes a #1 score"', () => {
      const scoreController = score.get(ScoreController);
      expect(scoreController.remove('1')).toBe(
        'This action removes a #1 score',
      );
    });
  });
});
