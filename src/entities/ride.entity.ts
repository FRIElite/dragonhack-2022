import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bike } from './bike.entity';
import { User } from './users.entity';

@Entity()
export class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  startTime: Date;

  @Column({
    nullable: true,
  })
  endTime: Date;

  @Column({ type: 'float' })
  startLat: number;

  @Column({ type: 'float' })
  startLng: number;

  @Column({ type: 'float', nullable: true })
  endLat: number;

  @Column({ type: 'float', nullable: true })
  endLng: number;

  @JoinColumn()
  @OneToOne(() => User)
  user: User;

  @JoinColumn()
  @ManyToOne(() => Bike, bike => bike.rides)
  bike: Bike;
}
