import { Injectable } from '@nestjs/common';
import { Source } from './source.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagService } from 'src/tag/tag.service';
import { Tag } from 'src/tag/tag.entity';
import { CreateSourceDto } from './DTOs/create-source.dto';

@Injectable()
export class SourceService {

    constructor(
        @InjectRepository(Source)
        private readonly sourceRepository: Repository<Source>,
        private readonly tagService: TagService
    ) {};
    
    async addSource(new_source: CreateSourceDto): Promise<void> {
        
        const { name, isRSS, url, tags} = new_source;
            

            const tag_objects: Tag[] = await Promise.all(
                tags.map((tag) => this.tagService.findOrCreate(tag))
            );
            const newly_added_source = this.sourceRepository.create({articles: [], isRSS: isRSS, tags: tag_objects, name: name, url: url});
            await this.sourceRepository.save(newly_added_source);

    }

    async getAllSources(): Promise<Source[]> {
        return await this.sourceRepository.find({relations: ['tags']});
    }

}
