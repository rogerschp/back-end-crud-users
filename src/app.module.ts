import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
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
