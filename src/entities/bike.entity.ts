import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Ride } from './ride.entity';
import { User } from './users.entity';

@Entity()
export class Bike extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  lat: number;

  @Column({ type: 'float' })
  lng: number;

  @JoinColumn()
  @ManyToOne(() => User, user => user.bikes, { eager: true })
  owner: User;

  @Column()
  reservedTime: Date;

  @Column({
    nullable: true,
  })
  activeUserId: number;

  @Column({ type: 'float' })
  rate: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @JoinColumn()
  @OneToMany(() => Ride, ride => ride.bike)
  rides: Ride[];
}
