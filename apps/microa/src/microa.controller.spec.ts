import { Test, TestingModule } from '@nestjs/testing';
import { UserCrudController } from './user-crud.controller';
import { UserCrudService } from './user-crud.service';

describe('UserCrudController', () => {
  let userCrudController: UserCrudController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserCrudController],
      providers: [UserCrudService],
    }).compile();

    userCrudController = app.get<UserCrudController>(UserCrudController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userCrudController.getHello()).toBe('Hello World!');
    });
  });
});
