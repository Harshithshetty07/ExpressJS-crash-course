// get all posts

const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit))
    }
    else {
        res.json(posts)
    }
    
}

export default getPosts