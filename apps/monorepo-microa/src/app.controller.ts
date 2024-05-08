import { Controller, Get, Inject, Post, Patch, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    @Inject('USERCRUD') private userCrud: ClientProxy
  ) {}

  @Post('create')
  async create(@Body() userDto : UserDto){
    console.log(userDto);
    const servieName = {cdm: 'create'};
    var result = await this.userCrud.send(servieName, userDto);
    return result;
  }

  @Post('findOne')
  async findOne(@Body() id : number){
    const servieName = {cdm: 'findOne'};
    var result = await this.userCrud.send(servieName, id);
    return result;
  }

  @Patch('update')
  async update(@Body() userDto : UserDto){
    const servieName = {cdm: 'update'};
    var result = await this.userCrud.send(servieName, userDto);
    return result;
  }

  @Delete('remove')
  async remove(@Body() id : number){
    const servieName = {cdm: 'remove'};
    var result = await this.userCrud.send(servieName, id);
    return result;
  }

}
