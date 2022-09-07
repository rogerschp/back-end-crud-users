import { User } from './../../users/entities/user.entity';
import { Organization } from './../../organization/entities/organization.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from 'class-transformer';
@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Type(() => Date)
  @Column('text')
  date_valid: Date;

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.teacher)
  @JoinColumn({ name: 'organizationId', referencedColumnName: 'id' })
  organization: Organization;

  @OneToOne(() => User, (user) => user.teacher)
  user: User;
}
