import { IsString, IsArray, IsBoolean, IsUrl } from 'class-validator';

export class CreateSourceDto {
    @IsString()
    name: string;

    @IsUrl()
    url: string;

    @IsBoolean()
    isRSS: boolean;

    @IsArray()
    tags: string[];
}
