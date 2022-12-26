import { Body, Controller, Post } from '@nestjs/common';

import { CreateTeamMemberBody } from './dtos/createTeamMemberBody';
import { RocketMembersRepository } from './repositories/rocketMembersRepository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('create-member')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
