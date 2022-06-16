import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';
import { PostsDto } from './interfaces/posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
        private readonly postsRepository: Repository<Posts>) {
    }


    async findAll(): Promise<Posts[]> {
        return await this.postsRepository.find();
    }


    async create(dto: PostsDto): Promise<PostsDto> {
        return this.postsRepository.save(dto)
    }

}