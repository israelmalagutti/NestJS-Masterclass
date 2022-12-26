import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';

import { PrismaRocketMembersRepository } from './repositories/prisma/prismaRocketMembersRepository';
import { RocketMembersRepository } from './repositories/rocketMembersRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
