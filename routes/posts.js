const store = require('../store.js')

module.exports = {
    getPosts(req, res) { //Get posts.
        res.status(200).send(store.posts)
    },
    addPost(req, res) { //Creates a new post.
        let newPost = req.body
        let id = store.posts.lenght
        newPost.comments = []
        store.posts.push(newPost)
        res.status(201).send({id: id})
    },
    updatePost(req, res) { //Updates a post.
        store.posts[req.params.id] = req.body
        res.status(200).send(store.posts[req.params.id])
    },
    removePost(req, res) { //Remove a post and all its comments.
        store.posts[req.params.id].comments.splice(req.params.commentid, store.posts[req.params.id].comments.lenght)
        store.posts.splice(req.params.id, 1)
        res.status(204).sendStatus
    }
  }