import { Ride } from '@/entities/ride.entity';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class RidesService extends Repository<Ride> {
}

export default RidesService;
