import { Bike } from '@/entities/bike.entity';
import BikeService from '@/services/bike.service';
import { NextFunction, Request, Response } from 'express';

class BikesController {
  public bikeService = new BikeService();

  public getBikes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bikes: Bike[] = await this.bikeService.findAllBikes();
      res.status(200).json(bikes);
    } catch (error) {
      next(error);
    }
  };

  public getBike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bikeId = Number(req.params.id);
      const findOneBikeData: Bike = await this.bikeService.findBikeById(bikeId);

      res.status(200).json(findOneBikeData);
    } catch (error) {
      next(error);
    }
  };
}

export default BikesController;
