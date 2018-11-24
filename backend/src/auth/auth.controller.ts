import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('signin')
    signin(): Promise<any> {
        return await this.
    }
    
    @Post('signup')
    signup(): Promise<String> {
        
    }
    
    

}
