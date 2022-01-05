const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true,
        unique: true
    }
});

const Post = mongoose.model('url', urlSchema);
module.exports = Post;