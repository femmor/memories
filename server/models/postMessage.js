import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: {
    type: String
  },
  message: {
    type: String
  },
  creator: {
    type: String
  },
  tags: {
    type: [String],
  },
  selectedFile: {
    type: String
  },
  likeCount: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage