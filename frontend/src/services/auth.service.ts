import { apiUrl } from "../config";
import { post } from "../http-client";
import { SignupUserDto } from "../interfaces/user.interface";

export function signup(userDto: SignupUserDto): Promise<Response>{
    return post(`${apiUrl}/signup`, userDto)
}

export function login(userDto: SignupUserDto): Promise<Response>{
    return post(`${apiUrl}/login`, userDto)
}

export function logout(userDto: SignupUserDto): Promise<Response>{
    return post(`${apiUrl}/login`, userDto)
}

