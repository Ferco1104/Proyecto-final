import { Controller, Get } from '@nestjs/common';
import { UserCrudService } from './microa.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';

@Controller()
export class UserCrudController {
  constructor(private readonly userCrudService: UserCrudService) {}

  @MessagePattern({cdm: 'create'})
  async create(user : UserDto){
    return await this.userCrudService.create(user);
  }

  @MessagePattern({cdm: 'update'})
  async update(user : UserDto){
    return await this.userCrudService.update(user);
  }

  @MessagePattern({cdm: 'findOne'})
  async findOne(id : number){
    return await this.userCrudService.findOne(id);
  }

  @MessagePattern({cdm: 'remove'})
  async remove(id : number){
    return await this.userCrudService.remove(id);
  }
}
