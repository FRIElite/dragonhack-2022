import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bike } from './bike.entity';
import { Location } from './location.entity';
import { User } from './users.entity';

@Entity()
export class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  startTime: Date;

  @Column()
  endTime: Date;

  @JoinColumn()
  @OneToOne(() => Location)
  startLocation: Location;

  @JoinColumn()
  @OneToOne(() => Location)
  endLocation: Location;

  @JoinColumn()
  @OneToOne(() => User)
  user: User;

  @ManyToOne(() => Bike, bike => bike.rides)
  bike: Bike;
}
