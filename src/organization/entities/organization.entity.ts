import { Teacher } from './../../teacher/entities/teacher.entity';
import { User } from './../../users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_organization: string;

  @OneToMany(() => User, (user) => user.organization)
  user: User;

  @OneToMany(() => Teacher, (teacher) => teacher.organization)
  teacher: Teacher;
}
