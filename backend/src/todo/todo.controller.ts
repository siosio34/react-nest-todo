import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodosRO, TodoRO } from './todo.interface';
import { CreateTodoDto } from './dto';

// import {
//   ApiUseTags,
//   ApiBearerAuth,
//   ApiResponse,
//   ApiOperation,
// } from '@nestjs/swagger';

@Controller('todo')
export class TodoController { 
  constructor(private readonly todoService: TodoService) {}
  
  @Get()
  async findAll(@Query() query): Promise<TodosRO> {
      return await this.todoService.findAll(query);
  }
  
  @Get(':id')
  async findOne(@Param() params): Promise<TodoRO> {
      const { id } = params;
      return await this.todoService.findOne({ id });
  }
  
  @Post()
  async create(@Body('todo') todoData: CreateTodoDto) {
      return this.todoService.create(todoData);
  }
  
  @Put(':id')
  async update(@Param() params, @Body('todo') todoData: CreateTodoDto) {
      return this.todoService.update(params.id, todoData);
  }
  
  @Delete(':id')
  async delete(@Param() params) {
      return this.todoService.delete(params.id)
  }
  
  
}