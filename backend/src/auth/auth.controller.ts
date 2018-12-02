import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('signin')
    signin(@Body() signInDto: SignInDto): Promise<any> {
        console.log(signInDto);
        return await this.authService.signIn(signInDto);
    }
    
    @Post('signup')
    signup(): Promise<String> {
        return await this.authService.signup();
    }
    
}
