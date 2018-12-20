import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { CreateTodoDto } from './dto';

import { TodoRO, TodosRO } from './todo.interface';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepository: Repository<TodoEntity>,
    ) {}
    
    async findAll(query): Promise<TodosRO> {
        const sqlQueryBuilder = await getRepository(TodoEntity)
            .createQueryBuilder('todo')
        
        if('title' in query) {
            sqlQueryBuilder.andWhere("todo.title LIKE : title", { title: `%${query.title}%` });
        }
        
        if('description' in query) {
            sqlQueryBuilder.andWhere("todo.description LIKE : description", { description: `%${query.description}%` });
        }
        
        const todos = await sqlQueryBuilder.getMany();
        const todosCount = await sqlQueryBuilder.getCount();
        
        return { todos, todosCount };
    }
    
    async findOne(where): Promise<TodoRO> {
        const todo = await this.todoRepository.findOne(where);
        return { todo };
    }
    
    async create(todoData: CreateTodoDto): Promise<TodoEntity> {
        console.log('zzz', todoData);
        let todo = new TodoEntity();
        todo.title = todoData.title;
        todo.description = todoData.description;
        todo.isFinished = false;
        
        const newTodo = await this.todoRepository.save(todo);
        
        return newTodo;
    }
    
    async update(id: number, todoData: CreateTodoDto): Promise<TodoRO> {
        let toUpdate = await this.todoRepository.findOne({ id: id });
        let updated = Object.assign(toUpdate, todoData);
        const todo = await this.todoRepository.save(updated);
        return { todo };
    }
    
    async delete(id: number): Promise<DeleteResult> {
        return await this.todoRepository.delete({id: id});
    }
    
}