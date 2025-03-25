import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SchoolProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  principleName: string;

  @Column('longtext')
  principleFile: string;

  @Column('longtext')
  principleGreeting: string;

  @Column('longtext')
  visionMissionFile: string;

  @Column('longtext')
  orgStructureFile: string;

  @Column('longtext')
  academicCalenderFile: string;
}
