import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { CreateHofizDto } from './dto/create-hofiz.dto';
import { HofizService } from './hofiz.service';

@Controller('hofiz')
export class HofizController {
    constructor(private readonly hofizService: HofizService){}

    @Public()
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createHofizDto: CreateHofizDto){
        return this.hofizService.create(createHofizDto)
    }

    @Public()
    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(){
        return this.hofizService.getAll()
    }
}
