import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Arsip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column('longtext')
  foto: string;
}
