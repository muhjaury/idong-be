import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TenagaKependidikan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column('longtext')
  deskripsi: string;

  @Column('longtext')
  foto: string;
}
