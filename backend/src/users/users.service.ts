import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    private saltRounds = 10;
    
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        ) {}
        
    async findOneUserByEmail(email: string): Promise<Users> {
         return await this.usersRepository.findOne({ email: email });
    }
    
    async createUser(user: Users): Promise<Users> {
        user.passwordHash = await this.getHash(user.password);
        user.password = undefined;
        
        return this.usersRepository.save(user);
    }
    
    async getHash(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }
    
    async compareHash(password: string, hash: string) : Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
