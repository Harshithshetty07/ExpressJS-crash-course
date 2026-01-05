import express from 'express';
const router = express.Router();
import getPosts from '../controllers/postController.js'

let posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post three'},
]


// Get all posts
// below getPosts is getting from controllers
router.get('/', getPosts)


// Get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        res.status(404).json({ message: `A post with the id of ${id} was not found`});
    }else {
        res.status(200).json(post)
    }
})


// Create new post
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if(!newPost.title) {
        return res.status(400).json({ message: 'Please include a title'})
    }
    else {
        posts.push(newPost);
    }
    res.status(201).json(posts)
})

// Update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        res.status(404).json({ message: `A post with the id of ${id} was not found`});
    }
    else {
        post.title = req.body.title;
        res.status(200).json(posts)
    }
})

// Delete post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        res.status(404).json({ message: `A post with the id of ${id} was not found`});
    }
    else {
        posts = posts.filter((post) => post.id !== id)
        res.status(200).json(posts)
    }
})




export default router