export interface User {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SignupUserDto {
    email: string;
    password: string;
}