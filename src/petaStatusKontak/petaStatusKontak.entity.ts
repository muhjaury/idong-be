import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PetaStatusKontak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lokasi: string;

  @Column()
  nomorTelepon: string;

  @Column()
  email: string;

  @Column()
  instagram: string;

  @Column()
  facebook: string;

  @Column('longtext')
  maps: string;
}
