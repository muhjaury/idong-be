import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Siswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column({ length: 10 })
  nisn: string;

  @Column()
  kelas: string;
}
