import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import profileRoutes from './routes/profile.routes'

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(cors({ origin: true }))

app.get('/' , (req, res) => {
  res.json({
    author: "Kevin",
    version: "1.0.0",
    description: "Faker Users Profile API made by Me"
  })
})

app.use('/api/profiles', profileRoutes)

export default app