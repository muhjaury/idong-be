import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TataTertib {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column('longtext')
  file: string;
}
