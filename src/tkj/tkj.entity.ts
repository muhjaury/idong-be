import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tkj {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi: string;

  @Column('longtext')
  file: string;
}
