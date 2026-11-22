import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { TodoDTO, UpdateTodoDto } from './todo.dto.js';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTodos() {
    return this.appService.getAllTodos();
  }

  @Get(':id')
  @HttpCode(200)
  getTodoByID(@Param('id', ParseIntPipe) id: number) {
  return this.appService.getTodoByID(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTodo(@Body() todo: TodoDTO) {
    return this.appService.createTodo(todo);
  }

  @Patch(':id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTodoDto,
  ) {
    return this.appService.updateTodo(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTodo(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteTodo(id);
  }
}
