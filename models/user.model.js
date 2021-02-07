const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    name_user:String,
    email_user:String,
    type_user:{type:Number, default:1},
    password_user:String,

},{
    timestamps:true
});

DataSchema.pre('save',function(next){
    if(!this.isModified("password_user")){
        return next();
    }
    this.password_user = bcrypt.hashSync(this.password_user,10);
    next();
});

DataSchema.pre('findOneAndUpdate', function (next){
    var password = this.getUpdate().password_user+'';
    if(password.length<55){
        this.getUpdate().password_user = bcrypt.hashSync(password,10);
    }
    next();
});

DataSchema.methods.isCorrectPassword = function (password, callback ){
    bcrypt.compare(password,this.password_user,function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    })
}

const users = mongoose.model('Users',DataSchema);
module.exports = users;