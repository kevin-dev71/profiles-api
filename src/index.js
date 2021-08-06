import app from './app'
import 'dotenv/config'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(db => console.log("DB connected"))
  .catch(error => console.log(error))

const PORT = process.env.PORT || 5000
app.listen(PORT)

console.log("Server listen on port ", PORT)