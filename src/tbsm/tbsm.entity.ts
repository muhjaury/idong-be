import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tbsm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi: string;

  @Column('longtext')
  file: string;
}
