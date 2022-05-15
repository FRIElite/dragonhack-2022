import { apiUrl } from "../config";
import { get } from "../http-client";
import { Ride } from "../interfaces/ride.interface";

export function getRides(): Promise<Ride[]>{
    return get(`${apiUrl}/rides`).then(res => res.json())
}