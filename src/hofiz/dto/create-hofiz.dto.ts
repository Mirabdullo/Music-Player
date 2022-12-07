import { IsNotEmpty, IsString } from "class-validator";

export class CreateHofizDto {
    @IsNotEmpty()
    @IsString({message: "string bolishi kerak"})
    readonly name: string
}