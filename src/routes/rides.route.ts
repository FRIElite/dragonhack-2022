import BikesController from '@/controllers/bikes.controller';
import RidesService from '@/services/rides.service';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class RidesRoute implements Routes {
  public path = '/rides';
  public router = Router();
  public ridesController = new RidesService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.ridesController.getBikes);
  }
}

export default RidesRoute;
