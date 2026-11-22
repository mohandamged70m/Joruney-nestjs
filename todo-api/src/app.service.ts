import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoDTO, UpdateTodoDto } from './todo.dto.js';

@Injectable()
export class AppService {
  private readonly todos: TodoDTO[] = [
    { id: 1, title: 'Learn NestJS', completed: false },
    { id: 2, title: 'Build a REST API', completed: false },
  ];

  getAllTodos(): TodoDTO[] {
    return this.todos;
  }

  getTodoByID(id: number): TodoDTO | undefined {
    const todo = this.todos.find((item) => item.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo ${id} not found`);
    }

    return todo;
  }

  createTodo(todo: TodoDTO): TodoDTO {
    this.todos.push(todo);
    return todo;
  }

  updateTodo(id: number, dto: UpdateTodoDto): TodoDTO {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      throw new NotFoundException(`Todo ${id} not found`);
    }

    this.todos[index] = { ...this.todos[index], ...dto, id };
    return this.todos[index];
  }

  deleteTodo(id: number) : TodoDTO {
    const taskId = this.todos.findIndex((todo) => todo.id === id);

    return this.todos.splice(taskId, 1)[0];
  }
}
