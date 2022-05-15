export interface StartRideDto {
  bikeId: number;
  userId: number;
}

export interface EndRideDto {
  rideId: number;
  bikeId: number;
}
