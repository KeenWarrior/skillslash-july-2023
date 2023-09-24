import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { ReelsModule } from './reels/reels.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'), PostsModule, CommentsModule, ReelsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
