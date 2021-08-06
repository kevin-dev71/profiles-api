import { Router } from 'express'
const router = Router()
import * as profileController from '../controllers/profiles.controller'
import Profile from '../models/Profile'

// find Profile by id middleware for patch, delete and get 

//TODO refactor this code, put businnes logic in a lib or util file
async function findProfileById(req, res, next){
  let profile
  try {
    profile = await Profile.findById(req.params.id)
    if(profile == null){
      return res.status(404).json({ error: "Cannot find that profile with id " + req.params.id})
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  res.profile = profile
  next()
}

router.get('/', profileController.getProfiles)
router.post('/', profileController.createProfile)
router.get('/:id', findProfileById, profileController.getProfileById)
router.patch('/:id', findProfileById, profileController.updateProfileById)
router.delete('/:id' , findProfileById, profileController.deleteProfileById)

export default router