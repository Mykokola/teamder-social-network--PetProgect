const {Schema,model} = require('mongoose')
const userSchema = new Schema(
    {
        password: {
          type: String,
          required: [true, 'Set password for user'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
       login:{
        type:String,
        required:[true,'login is reqired']
       },
       name:{
        type:String,
        required:[true,'name is reqired']
       },
       surName:{
        type:String,
        required:[true,'surName is reqired']
       },
       city:{
        type:String,
        required:[true,'city is reqired']
       },
       age:{
        type:Number,
        required:[true,'age is reqired']
       },
       bio:{
        type:String,
        require:[true,'bio is reuired']
       },
       socialMedia:{
        type:Array,
        require:[false]
       },
       friends:{
        type:Array,
        require:[false]
       },
       interess:{
        type:Array,
        require:[true,'interests is required']
       },
       likes:{
        type:Number,
        default:0,
        require:[false]
       },
       avatarURL: String,
       usersWhoLiked:{
        type:Array,
        require:[false]
      }
      },
    
)

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
const userModel = model('teamder-auth-users',userSchema)

export = userModel