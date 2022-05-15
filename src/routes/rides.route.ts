import RidesController from '@/controllers/rides.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class RidesRoute implements Routes {
  public path = '/rides';
  public router = Router();
  public ridesController = new RidesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/start`, this.ridesController.startRide);
    this.router.post(`${this.path}/end`, this.ridesController.endRide);
    this.router.get(`${this.path}`, this.ridesController.getRides);
  }
}

export default RidesRoute;
