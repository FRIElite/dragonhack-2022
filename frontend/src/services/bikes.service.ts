import { apiUrl } from "../config";
import { get } from "../http-client";
import { Bike } from "../interfaces/bike.interface";

export function getBikes(): Promise<Bike[]>{
    return get(`${apiUrl}/bikes`).then(res => res.json())
}