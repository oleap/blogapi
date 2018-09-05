const blogposts = require('./posts.js')
const comments = require('./comments.js')

//Exporting these modules from one source. This way we don't have to include more than one file in our main server.js.
module.exports = {
    blogposts,
    comments
}