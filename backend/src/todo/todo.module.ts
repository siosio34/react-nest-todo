import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoEntity } from './todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    providers: [TodoService],
    controllers: [TodoController],
})

export class TodoModule {}