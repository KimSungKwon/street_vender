import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열로 이루어진 배열

    marker: { name: String, position: { lat: Number, lng: Number }},
    p_id: String, 

    publishdDate: {
        type: Date,
        default: Date.now   // 현재 날짜를 기본값으로 지정
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String
    },
    likeButton: {
        like: { type: Number, default: 0 },
        soso: { type: Number, default: 0 },
        dislike: { type: Number, default: 0 }
    }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;