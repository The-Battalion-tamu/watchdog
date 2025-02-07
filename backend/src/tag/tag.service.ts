import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {

    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
    ) {};

    async tagExists(name: string): Promise<boolean> {
        const tag = await this.tagRepository.findOne({where: {name}});
        return tag !== null;
    };

    async addTag(name: string): Promise<void> {
        this.tagRepository.create({name: name});
    }

    async findOrCreate(name: string): Promise<Tag> {
        let tag = await this.tagRepository.findOne({where: {name}});
        if (tag) return tag;

        tag = this.tagRepository.create({name});
        return await this.tagRepository.save(tag);
        
    }
}
