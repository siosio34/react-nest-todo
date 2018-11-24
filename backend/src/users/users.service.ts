import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        ) {}
        
    async findOneByEmail(email: string): Promise<Users> {
         return await this.usersRepository.findOne({ email: email });
    }
}
