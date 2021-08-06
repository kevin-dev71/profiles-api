import Profile from "../models/Profile"

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find()
    res.json(profiles)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const createProfile = async (req, res) => {
  const { name, lastname, email, age } = req.body

  try {
    const newProfile = new Profile({ name, lastname, email, age })

    const profileSaved = await newProfile.save()

    res.status(201).json(profileSaved)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getProfileById = async (req, res) => {
  res.json(res.profile)
}

export const updateProfileById = async (req, res) => {
  if(req.body.name != null) {
    res.profile.name = req.body.name
  }
  if(req.body.lastname != null) {
    res.profile.lastname = req.body.lastname
  }
  if(req.body.email != null) {
    res.profile.email = req.body.email
  }
  if(req.body.age != null) {
    res.profile.age = req.body.age
  }
  
  try {
    const updatedProfile = await res.profile.save()
    res.json(updatedProfile)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteProfileById = async (req, res) => {
  try {
    await res.profile.remove()
    res.status(204).json({ message: 'Profile deleted'})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}