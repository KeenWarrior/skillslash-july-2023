const { model } = require('mongoose');
const Post = require('../models/post.model');
const { getUserById } = require('./user.service');

const createPost = async (postBody) => {
  const post = await Post.create(postBody);
  return post;
};

const getPosts = async () => {
  const posts = await Post.find();

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

const getPostById = async (id) => {
  const post = await Post.findById(id);
  return post;
};

const getPostsByUserId = async (userId) => {
  const posts = await Post.find({ user: userId });
  return posts;
};

const deletePostById = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  getPostsByUserId,
  deletePostById,
};
