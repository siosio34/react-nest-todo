import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    email: string;
    
    @Column({ length: 20 })
    name: string;
    
    @Column()
    password: string;
    
    @Column()
    passwordHash: string;
    
}