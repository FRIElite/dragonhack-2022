import { Bike } from '@/entities/bike.entity';
import { Ride } from '@/entities/ride.entity';
import { User } from '@/entities/users.entity';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class RidesService extends Repository<Ride> {
  public async findAllRides(): Promise<Ride[]> {
    const rides = await Ride.find();
    return rides;
  }

  public async startRide(bike: Bike, user: User): Promise<Ride> {
    const ride = await Ride.create({
      bike,
      user,
      startLng: bike.lng,
      startLat: bike.lat,
    }).save();
    return ride;
  }

  public async findRideById(rideId: number): Promise<Ride> {
    if (isEmpty(rideId)) throw new HttpException(400, "You're not bikeId");

    const findRide: Ride = await Ride.findOne({ where: { id: rideId } });
    if (!findRide) throw new HttpException(409, "You're not bike");

    return findRide;
  }

  public async endRide(ride: Ride, bike: Bike): Promise<Ride> {
    const savedRide = await Ride.findOne(ride.id);

    savedRide.endLat = bike.lat;
    savedRide.endLng = bike.lng;
    savedRide.endTime = new Date();

    savedRide.save();

    return savedRide;
  }
}

export default RidesService;
