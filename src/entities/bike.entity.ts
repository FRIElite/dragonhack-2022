import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Location } from './location.entity';
import { Ride } from './ride.entity';
import { User } from './users.entity';

@Entity()
export class Bike extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @ManyToOne(() => User, user => user.bikes)
  owner: User;

  @Column()
  reservedTime: Date;

  @JoinColumn()
  @OneToOne(() => User)
  activeUser: User;

  @Column()
  rate: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Ride, ride => ride.bike)
  rides: Ride[];
}
