import { Bike } from '@/entities/bike.entity';
import BikeService from '@/services/bike.service';
import { NextFunction, Request, Response } from 'express';

class BikesController {
  public bikeService = new BikeService();

  public getBikes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bikes: Bike[] = await this.bikeService.findAllBikes();

      res.status(200).json({ data: bikes, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default BikesController;
