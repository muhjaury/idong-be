import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DaftarHadir {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kelas: string;

  @Column()
  jurusan: string;

  @Column()
  tahunAjar: string;

  @Column('longtext')
  file: string;
}
