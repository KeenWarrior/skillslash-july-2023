import { HttpException, Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  create(createPostDto: any): Promise<Post> {
    const post = this.postModel.create(createPostDto);
    return post;
  }

  findAll(): Promise<Post[]> {
    const posts = this.postModel.find();
    return posts;
  }

  findOne(id: string): Promise<Post> {
    return this.postModel.findById(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    });
  }

  remove(id: string, requestedBy: string) {
    const post = this.postModel.findOneAndDelete({
      _id: id,
      author: requestedBy,
    });
    return post;
  }
}
