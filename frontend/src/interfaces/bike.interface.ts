import { User } from "./user.interface";

export interface Bike  {
  id: number;

  location: Location;

  owner: User;

  reservedTime: Date;

  activeUser: User;

  rate: number;

  createdAt: Date;

  updatedAt: Date;

}
