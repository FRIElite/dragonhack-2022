import BikesController from '@/controllers/bikes.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class BikesRoute implements Routes {
  public path = '/bikes';
  public router = Router();
  public bikesController = new BikesController();
  public bikesService = new this.bikesService();

  constructor() {
    this.initializeRoutes();
    this.dummyData();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.bikesController.getBikes);
  }

  private async dummyData() {

  }
}

export default BikesRoute;
