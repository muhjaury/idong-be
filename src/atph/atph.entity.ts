import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Atph {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi: string;

  @Column('longtext')
  file: string;
}
