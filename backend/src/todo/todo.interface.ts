import { TodoEntity } from './todo.entity';

export interface TodoRO {
    todo: TodoEntity;
}

export interface TodosRO {
    todos: TodoEntity[];
    todosCount: number;
}