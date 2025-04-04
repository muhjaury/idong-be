import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pelanggaran {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nis: string;

  @Column()
  pelanggaran: string;
}
