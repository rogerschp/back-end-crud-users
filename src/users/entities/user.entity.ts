import { Organization } from './../../organization/entities/organization.entity';
import { Teacher } from '../../teacher/entities/teacher.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_user: string;

  @Type(() => Date)
  @Column('text')
  birthday: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  teacherId: number;

  @Column()
  organizationId: number;

  @OneToOne(() => Teacher, (teacher) => teacher.user)
  @JoinColumn({ name: 'teacherId', referencedColumnName: 'id' })
  teacher: Teacher;

  @ManyToOne(() => Organization, (organization) => organization.user)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: Organization;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
