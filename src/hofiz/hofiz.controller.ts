import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { CreateHofizDto } from './dto/create-hofiz.dto';
import { UpdateHofizDto } from './dto/update-hofiz.dto';
import { HofizService } from './hofiz.service';

@Controller('hofiz')
export class HofizController {
    constructor(private readonly hofizService: HofizService){}

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

    @Public()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOneById(@Param('id') id: number){
        return this.hofizService.getOneById(id)
    }
    

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateHofiz(@Param('id') id: number, @Body() updateDto: UpdateHofizDto){
        return this.hofizService.updateHofiz(id, updateDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteHofiz(@Param('id') id: number){
        return this.hofizService.deleteHofiz(id)
    }
}
