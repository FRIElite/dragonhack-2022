import BikesController from '@/controllers/bikes.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class BikesRoute implements Routes {
  public path = '/bikes';
  public router = Router();
  public bikesController = new BikesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.bikesController.getBikes);
  }
}

export default BikesRoute;
