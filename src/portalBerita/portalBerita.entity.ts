import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PortalBerita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @Column('longtext')
  deskripsi: string;

  @Column('longtext')
  foto: string;
}
