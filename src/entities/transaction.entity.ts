import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet } from './wallet.entity';

@Entity()
export class WalletTransaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Wallet, wallet => wallet.outTransactions)
  from: Wallet;

  @ManyToOne(() => Wallet, wallet => wallet.inTransactions)
  to: Wallet;

  @Column()
  amount: number;

  @Column()
  currency: string;
}
