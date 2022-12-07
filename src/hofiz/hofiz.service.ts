import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHofizDto } from './dto/create-hofiz.dto';

@Injectable()
export class HofizService {
  constructor(private prismaService: PrismaService) {}

  async create(createHofizDto: CreateHofizDto) {
    try {
        const hofiz = await this.prismaService.hofiz.create({
            data: createHofizDto
        })
        return hofiz
    } catch (error) {
        console.log(error);
      throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN);
    }
  }

  async getAll(){
    const hofiz = await this.prismaService.hofiz.findMany({include: {albums: true}})
    return hofiz
  }



}
