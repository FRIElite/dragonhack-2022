import { Bike } from "./bike.interface";
import { User } from "./user.interface";

export interface Ride  {
  id: number;

  startTime: Date;

  endTime: Date;

  startLat: number;

  startLng: number;

  endLat: number;

  endLng: number;

  user: User;

  bike: Bike;
}

export interface StartRideDto {
    bikeId: number;
    userId: number | string;
  }
  
  export interface EndRideDto {
    rideId: number;
    bikeId: number;
  }
  