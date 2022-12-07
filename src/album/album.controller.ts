import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { AlbumService } from './album.service';
import { AlbumDto } from './dto/album.dto';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService){}

    @Public()
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() albumDto: AlbumDto){
        return this.albumService.create(albumDto)
    }

    @Public()
    @Get()
    async getAll(){
        return this.albumService.getAll()
    }
}
