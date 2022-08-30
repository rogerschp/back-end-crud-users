import { Teacher } from './entities/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Teacher, Organization])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
