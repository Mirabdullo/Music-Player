import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateHofizDto {
    @IsOptional()
    @IsString({message: "string bolishi kerak"})
    readonly name: string
}