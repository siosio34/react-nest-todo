import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column
    email: string;
    
    @Column({ length: 20 })
    name: string;
    
    @Column()
    password: string;
    
    @Column()
    passwordSalt: string;
    
}