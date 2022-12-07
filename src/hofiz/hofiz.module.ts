import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { HofizController } from './hofiz.controller';
import { HofizService } from './hofiz.service';

@Module({
  imports: [PrismaModule],
  controllers: [HofizController],
  providers: [HofizService]
})
export class HofizModule {}
