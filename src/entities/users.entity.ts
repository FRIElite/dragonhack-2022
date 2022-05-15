import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Bike } from './bike.entity';
import { Wallet } from './wallet.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  email: string;

  @Column({ select: false })
  @IsNotEmpty()
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @JoinColumn()
  @OneToOne(() => Wallet)
  wallet: Wallet;

  @JoinColumn()
  @OneToMany(() => Bike, bike => bike.owner)
  bikes: Bike[];

  @Column({
    nullable: true,
  })
  activeBikeId: number;
}
