import { Get, Post, Controller, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    getPosts(): Promise<Posts[]> {
      return this.postsService.findAll();
    }

    // @Post()
    // create(): Promise<Posts[]> {
    //   return this.;
    // }


    // @Get(':name')
    // getProductByName(@Param() params: any): Promise {
    //   return this.productService.findByName(params.name);
    // }
}