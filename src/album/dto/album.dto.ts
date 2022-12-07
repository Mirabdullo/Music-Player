import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class AlbumDto {
    @IsNotEmpty()
    @IsString({message: "String bo'lishi kerak"})
    readonly albumName: string
    @IsNotEmpty()
    @IsDate({message: "Sana bo'lishi kerak"})
    readonly releaseDate: Date
    @IsNotEmpty()
    @IsNumber({},{message: "Number bo'lishi kerak"})
    readonly hofiz_id: number
    @IsNotEmpty()
    @IsString({message: "String bo'lishi kerak"})
    readonly genre: string
}