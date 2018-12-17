import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
    
    @IsNotEmpty()
    readonly title: string;
    
    @IsNotEmpty()
    readonly description: string;
}