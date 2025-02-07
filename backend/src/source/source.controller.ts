import { Body, Controller, Get, Post } from '@nestjs/common';
import { SourceService } from './source.service';
import { CreateSourceDto } from './DTOs/create-source.dto';

@Controller('source')
export class SourceController {

    constructor(private readonly sourceService: SourceService) {}

    @Post()
    async createSource(@Body() createSourceDto: CreateSourceDto) {
        return await this.sourceService.addSource(createSourceDto);   
    }

    @Get()
    async getAllSources() {
        return await this.sourceService.getAllSources();
    }

}
