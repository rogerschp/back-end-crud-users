import { Organization } from './organization.entity';
import { Teacher } from './teacher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_user: string;

  @Column()
  birthday: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Teacher)
  @JoinColumn()
  idTeacher: Teacher;

  @OneToOne(() => Organization)
  @JoinColumn()
  idOrganization: Organization;
}
