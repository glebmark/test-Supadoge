import { Get, Post, Controller, Param, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.entity';
import { PostsDto } from './interfaces/posts.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    getPosts(): Promise<Posts[]> {
      return this.postsService.findAll();
    }


    @Post()
    create(@Body() PostsDto: PostsDto) {

        // return  this.postsService.addPosts(Posts);
        return  PostsDto;
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