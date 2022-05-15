import BikeService from '@/services/bike.service';
import RidesService from '@/services/rides.service';
import UserService from '@/services/users.service';
import { NextFunction, Request, Response } from 'express';

class RidesController {
  public ridesService = new RidesService();
  public bikeService = new BikeService();
  public userService = new UserService();

  public getRides = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rides = await this.ridesService.findAllRides();
      res.status(200).json(rides);
    } catch (error) {
      next(error);
    }
  };

  public startRide = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { bikeId, userId } = req.body;
      const bike = await this.bikeService.findBikeById(bikeId);
      const user = await this.userService.findUserById(userId);

      console.log(bike, user);

      const ride = await this.ridesService.startRide(bike, user);
      res.status(200).json(ride);
    } catch (error) {
      next(error);
    }
  };

  public endRide = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { rideId, bikeId } = req.body;
      const user = await this.ridesService.findRideById(rideId);
      const bike = await this.bikeService.findBikeById(bikeId);

      const ride = await this.ridesService.endRide(user, bike);
      res.status(200).json(ride);
    } catch (error) {
      next(error);
    }
  };
}

export default RidesController;
