import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Album } from '@prisma/client';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumService {
  constructor(private prismaService: PrismaService,
    private readonly jwtService: JwtService) {}


  async create(albumDto: AlbumDto) {
    try {
      const album = await this.prismaService.album.create({
        data: albumDto
      });
      return album;
    } catch (error) {
        console.log(error);
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }

  async getAll(){
    try {
        const albums = await this.prismaService.album.findMany()
        return albums
    } catch (error) {
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }

  async getOneById(id: number){
    return this.prismaService.album.findUnique({where: {id: Number(id)}})
  }

  async updateAlbum(id: number, updateDto: UpdateAlbumDto){
    return this.prismaService.album.update({where: {id: +id}, data: updateDto})
  }

  async deleteAlbum(id: number){
    const album = await this.prismaService.album.delete({
      where: {id: +id}
    })
    return album
  }
}
