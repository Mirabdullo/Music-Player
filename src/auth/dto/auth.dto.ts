import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString({message: "String bolishi kerak"})
    readonly name: string
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    @IsString()
    readonly password: string
}