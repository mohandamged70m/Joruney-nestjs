import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return all todos', () => {
    expect(appController.getAllTodos()).toEqual([
      { id: 1, title: 'Learn NestJS', completed: false },
      { id: 2, title: 'Build a REST API', completed: false },
    ]);
  });

  it('should return a single todo by id', () => {
    expect(appController.getTodoByID(1)).toEqual({
      id: 1,
      title: 'Learn NestJS',
      completed: false,
    });
  });
});
