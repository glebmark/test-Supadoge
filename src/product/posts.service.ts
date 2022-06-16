import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>) {
        const pr1 = new Posts();
        pr1.description = 'First Product';
        pr1.name = 'product1';
        this.postsRepository.save(pr1);
    }

  async findAll(): Promise<Posts[]> {
    return await this.postsRepository.find();
  }

//   async findByName(name: string): Promise {
//     const result = await this.productRepository.find({ name: name });
//     return result[0];
//   }
}