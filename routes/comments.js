const store = require('../store.js')

module.exports = {
    getComments(req, res) { //Get comments of a post.
        res.status(200).send(store.posts[req.params.id].comments)
    }, 
    addComment(req, res) { //Add comments to a post.
        let newComment = req.body
        let commentid = store.posts[req.params.id].comments.lenght
        store.posts[req.params.id].comments.push(newComment)
        res.status(201).send({commentid: commentid})
    },
    updateComment(req, res) { //Update a comment on a post.
        store.posts[req.params.id].comments[req.params.commentid] = req.body
        res.status(200).send(store.posts[req.params.id].comments[req.params.commentid])
    },
    removeComment(req, res) { //Remove a comment on a post.
        store.posts[req.params.id].comments.splice(req.params.commentid, 1)
        res.status(204).sendStatus
    }  
  }