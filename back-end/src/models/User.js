const mongoose = require("mongoose")

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['student', 'teacher', 'cientist'], 
        default: 'user',
      },
      avatar: {
        type: String,
        default: '', //URL aqui
      }
}, { timestamps: true });


module.exports= User;
