import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './product/posts.module';


@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'database.db',
        synchronize: true,
        logging: false,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
      PostsModule],
    controllers: [AppController],
    providers: [],
  })
  export class ApplicationModule {}