import { apiUrl } from "../config";
import { get, post } from "../http-client";
import { Ride, StartRideDto } from "../interfaces/ride.interface";

export function getRides(): Promise<Ride[]>{
    return get(`${apiUrl}/rides`).then(res => res.json())
}

export function startRide(data: StartRideDto): Promise<Ride> {
    return post(`${apiUrl}/rides/start`, data).then(res => res.json())
}