import { Ride } from '@/entities/ride.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class RidesService extends Repository<Ride> {}

export default RidesService;
