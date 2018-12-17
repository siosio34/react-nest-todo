import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  description: string;
  
  @Column()
  isFinished: boolean;
  
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  created: Date;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updated: Date;
  
  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date;
  }
}