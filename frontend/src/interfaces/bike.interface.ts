import { User } from "./user.interface";

export interface Bike  {
  id: number;

  lat: number;

  lng: number;

  owner: User;

  reservedTime: Date;

  activeUser: User;

  rate: number;

  rating: number;

  createdAt: Date;

  updatedAt: Date;

}
