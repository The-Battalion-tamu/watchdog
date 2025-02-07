import { Body, Controller, Post } from '@nestjs/common';
import { SourceService } from './source.service';
import { CreateSourceDto } from './DTOs/create-source.dto';

@Controller('source')
export class SourceController {

    constructor(private readonly sourceService: SourceService) {}

    @Post()
    async createSource(@Body() createSourceDto: CreateSourceDto) {
        return await this.sourceService.addSource(createSourceDto);   
    }

}
