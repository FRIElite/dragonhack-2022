import { Bike } from '@/entities/bike.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class BikeService extends Repository<Bike> {
  public async findAllBikes(): Promise<Bike[]> {
    const bikes: Bike[] = await Bike.find();
    return bikes;
  }
}

export default BikeService;
