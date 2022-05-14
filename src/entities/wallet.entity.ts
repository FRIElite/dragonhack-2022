import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WalletTransaction } from './transaction.entity';

@Entity()
export class Wallet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  balance: number;

  @Column()
  currency: string;

  @OneToMany(() => WalletTransaction, walletTransaction => walletTransaction.to)
  outTransactions: WalletTransaction[];

  @OneToMany(() => WalletTransaction, walletTransaction => walletTransaction.to)
  inTransactions: WalletTransaction[];
}
