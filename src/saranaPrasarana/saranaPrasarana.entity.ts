import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SaranaPrasarana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column('longtext')
  foto: string;
}
