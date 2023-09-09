const postService = require('../services/post.service');
const userService = require('../services/user.service');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const createPost = catchAsync(async (req, res) => {
    req.body.user = req.user.id;
    const post = await postService.createPost(req.body);
    res.status(httpStatus.CREATED).send(post);
});

const getPosts = catchAsync(async (req, res) => {
    const posts = await postService.getPosts(req.user.id);
    res.send(posts);
});

const getPost = catchAsync(async (req, res) => {
    const post = await postService.getPostById(req.params.postId);
    if (!post) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    }
    res.send(post);
});

const getPostsByUser = catchAsync(async (req, res) => {
    const posts = await postService.getPostsByUserId(req.params.userId);
    res.send(posts);
});

const deletePostById = catchAsync(async (req, res) => {
    const post = await postService.deletePostById(req.params.postId);
    res.status(httpStatus.OK).send(post);
});

const likePost = catchAsync(async (req, res) => {
    const like = await postService.likePost(req.params.postId, req.user.id);
    res.status(httpStatus.OK).send(like);
});

module.exports = {
    createPost,
    getPosts,
    getPost,
    getPostsByUser,
    deletePostById,
    likePost,
}