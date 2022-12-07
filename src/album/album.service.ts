import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Album } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlbumDto } from './dto/album.dto';

@Injectable()
export class AlbumService {
  constructor(private prismaService: PrismaService) {}


  async create(albumDto: AlbumDto) {
    try {
      const { albumName, releaseDate, hofiz_id, genre } = albumDto;
      const album = await this.prismaService.album.create({
        data: {
          albumName,
          releaseDate,
          hofiz_id,
          genre,
        },
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
}
