import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHofizDto } from './dto/create-hofiz.dto';
import { UpdateHofizDto } from './dto/update-hofiz.dto';

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

  async getOneById(id: number){
    return this.prismaService.hofiz.findUnique({where: {id: Number(id)}})
  }

  async updateHofiz(id: number, updateDto: UpdateHofizDto){
    return this.prismaService.hofiz.update({where: {id: +id}, data: updateDto})
  }

  async deleteHofiz(id: number){
    const hofiz = await this.prismaService.hofiz.delete({
      where: {id: +id}
    })
    return hofiz
  }



}
