import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TodoModule,
  ],
  controllers: [
    AppController
  ]
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}