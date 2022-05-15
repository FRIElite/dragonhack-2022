import { Bike } from '@/entities/bike.entity';
import BikeService from '@/services/bike.service';
import RidesService from '@/services/rides.service';
import { NextFunction, Request, Response } from 'express';

class RidesController {
  public ridesService = new RidesService();

  // public getBikes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const bikes: Bike[] = await this.bikeService.findAllBikes();
  //     res.status(200).json(bikes);
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default RidesController;
