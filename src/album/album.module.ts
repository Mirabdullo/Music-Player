import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

@Module({
  imports: [ JwtModule.register({}),PrismaModule],
  controllers: [AlbumController],
  providers: [AlbumService],
  
})
export class AlbumModule {}
