//Required modules. We use express and bodyparser to handle most of the work for us. We also take the functions we created in the routes folder.
const express = require ('express')
const bodyparser = require ('body-parser')
const blog = require ('./routes/index.js')

//Use express and bodyparser.
let app = express()
app.use(bodyparser.json())

//Functions for blog posts.
app.get('/posts', blog.blogposts.getPosts)
app.post('/posts', blog.blogposts.addPost)
app.put('/posts/:id', blog.blogposts.updatePost)
app.delete('/posts/:id', blog.blogposts.removePost)

//Functions for comments.
app.get('/posts/:id/comments', blog.comments.getComments)
app.post('/posts/:id/comments', blog.comments.addComment)
app.put('/posts/:id/comments', blog.comments.updateComment)
app.delete('/posts/:id/comments', blog.comments.removeComment)

//Port.
app.listen(3000)