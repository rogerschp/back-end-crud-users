import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrganizationModule } from './organization/organization.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    UsersModule,
    OrganizationModule,
    TeacherModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Cathoud',
      database: 'Crud-Users',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
