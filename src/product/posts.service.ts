import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>) {

    }

  async findAll(): Promise<Posts[]> {
    return await this.postsRepository.find();
  }

//   addPosts(post): Promise<any> {
//     return new Promise(resolve => {
//         this.Posts.push(post);
//         resolve(this.Posts);
//     })
// }



//   async findByName(name: string): Promise {
//     const result = await this.productRepository.find({ name: name });
//     return result[0];
//   }
}