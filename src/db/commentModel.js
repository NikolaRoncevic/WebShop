const mongoose = require('mongoose')

const Comment = mongoose.model('Comment', {
    productId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        default: 'Comment'
    }
})

module.exports = Comment;