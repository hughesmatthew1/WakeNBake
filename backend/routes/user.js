const express = require('express')
const router = express.Router()
const User = require('../models/users')

//getting all users
router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    }catch(err) {
        res.status(500).json({message : err.message})
    }
})

//creating user
router.post('/', async (req, res) => {
    const { username, password, rewardPoints} = req.body;
    
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }
        const user = new User({
            username,
            password,
            rewardPoints,
        });
        
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


//getting one user
router.get('/:id', getUser, (req,res) => {
    res.json(res.user)
})


//deleting a user
router.delete('/:id', getUser, async (req, res) => {
    try{
        await res.user.deleteOne()
        res.json({ message : 'Deleted User'})
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
})


async function getUser(req, res, next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message : 'Item cannot be found'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

module.exports = router