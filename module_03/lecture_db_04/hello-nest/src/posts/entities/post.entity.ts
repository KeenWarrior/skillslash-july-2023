import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/users/entities/user.entity";

@Schema()
export class Post {
  @Prop(
    {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  )
  author: User;

  @Prop({
    required: true,
  })
  imageSrc: string;

  @Prop()
  caption: string;

  @Prop(
    { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
  )
  mentions: User[];
}

export type PostDocument = mongoose.Document<Post>;

export const PostSchema = SchemaFactory.createForClass(Post);
