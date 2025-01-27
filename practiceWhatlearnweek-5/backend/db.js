const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://Ajch07:broken321@cluster0.boxno.mongodb.net/Blogapp');



// Define the Blog Schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ', // Reference to the User model
        required: true,
    },
});

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog', // Reference to the Blog model
    }],
});

// Create the models
const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User ', userSchema);

// Export the models
module.exports = { User, Blog };

