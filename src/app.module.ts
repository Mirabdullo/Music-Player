import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AlbumModule } from './album/album.module';
import { HofizModule } from './hofiz/hofiz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    PrismaModule,
    AlbumModule,
    HofizModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
