import { Organization } from './../../organization/entities/organization.entity';
import {
  Column,
  Entity,
  JoinColumn,
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

  @OneToOne(() => Organization)
  @JoinColumn()
  idOrganization: Organization;
}
