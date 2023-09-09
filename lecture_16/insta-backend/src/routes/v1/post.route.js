const postController = require('../../controllers/post.controller');

const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { createPost } = require('../../validations/post.validation');

const router = express.Router();

router.post('/', auth(), validate(createPost), postController.createPost);
router.get('/',  auth(), postController.getPosts);
router.get('/user/:userId',  auth(), postController.getPostsByUser);
router.get('/:postId',  auth(), postController.getPost);
router.delete('/:postId', auth(), postController.deletePostById);

router.patch('/:postId/like', auth(), postController.likePost);

module.exports = router;
