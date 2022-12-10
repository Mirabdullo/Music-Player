import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Response } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Public } from 'src/common/decorators';
import { AlbumService } from './album.service';
import { AlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService,
        ){}


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

    @Public()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOneById(@Param('id') id: number){
        return this.albumService.getOneById(id)
    }
    

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateAlbum(@Param('id') id: number, @Body() updateDto: UpdateAlbumDto){
        return this.albumService.updateAlbum(id, updateDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteAlbum(@Param('id') id: number){
        return this.albumService.deleteAlbum(id)
    }
}
