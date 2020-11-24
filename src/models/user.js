import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String
});

// 인스턴스 메서드. 모델을 통해 만든 문서 인스턴스( user = new User({}) )에서 사용할 수 있음
UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;  // boolean
};

UserSchema.methods.serialize = function() {
    const data = this.toJSON()  // this는 모델 인스턴스를 가르킴
    delete data.hashedPassword;
    return data;
};

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        // 첫번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣음
        {
            _id: this.id,
            username: this.username
        },
        process.env.JWT_SECRET, // 두번째 파라미터에는 JWT 암호를 넣음
        {
            expiresIn: '7d'     // 7일동안 유효함
        }
    );
    return token;
};

// 스태틱 메서드. 모델에서 바로 사용할 수 있음
UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });  // this는 모델(User)을 가르킴
};

const User = mongoose.model('User', UserSchema);
export default User;