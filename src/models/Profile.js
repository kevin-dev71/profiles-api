import {Schema, model} from 'mongoose'
 
const profileSchema = new Schema({
  email: { type: String, unique: true, required: true},
  name: String,
  lastname: String,
  age: String
}, { timestamps: true , versionKey: false })

export default model('Profile' , profileSchema)