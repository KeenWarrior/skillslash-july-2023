const { model } = require('mongoose');
const Post = require('../models/post.model');
const { getUserById } = require('./user.service');
const Like = require('../models/like.model');

const createPost = async (postBody) => {
  const post = await Post.create(postBody);
  return post;
};

const getPosts = async (reqUserId) => {
  const posts = await Post.find();

  const postPromises = posts.map(async (post) => {
    const user = await getUserById(post.user);
    const userJson = user.toJSON();

    const like = await Like.findOne({ post: post.id, user: reqUserId });
    const likedByCount = await Like.countDocuments({ post: post.id });
    const liked = !!like;

    return {
      ...post.toJSON(),
      liked,
      likedByCount,
      user: {
        name: userJson.name,
        avatar: userJson.avatar,
        id: userJson.id,
      },
    };
  });

  return await Promise.all(postPromises);
};

const getPostById = async (id) => {
  const post = await Post.findById(id);
  return post;
};

const getPostsByUserId = async (userId) => {
  const posts = await Post.find({
    user: userId,
  });

  const postPromises = posts.map(async (post) => {
    const user = await getUserById(post.user);
    const userJson = user.toJSON();
    return {
      ...post.toJSON(),
      user: {
        name: userJson.name,
        avatar: userJson.avatar,
        id: userJson.id,
      },
    };
  });
  return await Promise.all(postPromises);
};

const deletePostById = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

const likePost = async (postId, userId) => {
  const like = await Like.findOne({ post: postId, user: userId });
  if (like) {
    await like.remove();
    const likedByCount = await Like.countDocuments({ post: postId });
    return { liked: false, likedByCount };
  } else {
    await Like.create({ post: postId, user: userId });
    const likedByCount = await Like.countDocuments({ post: postId });
    return { liked: true, likedByCount };
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  getPostsByUserId,
  deletePostById,
  likePost,
};
