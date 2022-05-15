import { Bike } from '@/entities/bike.entity';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class BikeService extends Repository<Bike> {
  public async findAllBikes(): Promise<Bike[]> {
    const bikes: Bike[] = await Bike.find();
    return bikes;
  }

  public async findBikeById(bikeId: number): Promise<Bike> {
    if (isEmpty(bikeId)) throw new HttpException(400, "You're not bikeId");

    const findBike: Bike = await Bike.findOne({ where: { id: bikeId } });
    if (!findBike) throw new HttpException(409, "You're not bike");

    return findBike;
  }

  public async createBike(bikeData: Bike): Promise<Bike> {
    const bike = await Bike.create(bikeData).save();
    return bike;
  }
}

export default BikeService;
