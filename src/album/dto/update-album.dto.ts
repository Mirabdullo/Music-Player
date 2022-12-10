import { IsDate, IsOptional, IsNumber, IsString } from "class-validator"

export class UpdateAlbumDto {
    @IsOptional()
    @IsString({message: "String bo'lishi kerak"})
    readonly albumName: string
    @IsOptional()
    @IsDate({message: "Sana bo'lishi kerak"})
    readonly releaseDate: Date
    @IsOptional()
    @IsNumber({},{message: "Number bo'lishi kerak"})
    readonly hofiz_id: number
    @IsOptional()
    @IsString({message: "String bo'lishi kerak"})
    readonly genre: string
}