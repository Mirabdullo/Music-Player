import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

@Module({
  imports: [PrismaModule],
  controllers: [AlbumController],
  providers: [AlbumService],
  
})
export class AlbumModule {}
