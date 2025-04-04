import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Siswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kelas: string;

  @Column()
  nis: string;

  @Column()
  nama: string;

  @Column()
  jenisKelamin: string;

  @Column()
  alamat: string;
}
