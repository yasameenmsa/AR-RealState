// const authController = require('express').Router();
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const axios = require('axios');
// const jwt = require('jsonwebtoken');

// authController.post('/register', async (req, res) => {
//   try {
//     // Check if the email is already taken
//     const isExisting = await User.findOne({ email: req.body.email });
//     if (isExisting) {
//       throw new Error('Email is already taken by another user');
//     }

//     // Hash the user's password
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     // Create a new user in your database
//     const newUser = await User.create({ ...req.body, password: hashedPassword });

//     // Store a user-copy on Chat Engine
//     const chatEngineUser = {
//       username: req.body.username,
//       secret: req.body.password,
//     };

//     const chatEngineResponse = await axios.post(
//       'https://api.chatengine.io/users/',
//       chatEngineUser,
//       {
//         headers: { 'Private-Key': process.env.CHAT_ENGINE_PRIVATE_KEY },
//       }
//     );

//     // Handle Chat Engine response
//     if (chatEngineResponse.status !== 200) {
//       throw new Error('Error creating Chat Engine user');
//     }

//     // Generate a JWT token for the user
//     const { password, ...others } = newUser._doc;
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: '8d',
//     });

//     console.log('User registration successful.');

//     // Return a response with user data and token
//     return res.status(201).json({ others, token });
//   } catch (error) {
//     console.error('Error during user registration:', error.message);
//     return res.status(500).json(error.message);
//   }
// });



// authController.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email })
//     if (!user) {
//       throw new Error('Wrong Email. Try again!')
//     }


//     const comparePass = await bcrypt.compare(req.body.password, user.password)
//     if (!comparePass) {
//       throw new Error('Wrong Password. Try again!')
//     }

//     const { password, ...others } = user._doc
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8d' })

//     return res.status(200).json({ others, token })
//    } catch (error) {
//     return res.status(500).json(error.message)
//   }
// })


// module.exports = authController

/////
const authController = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

authController.post('/register', async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email })

    if (isExisting) {
      throw new Error("Email is already taken by another user")
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = await User.create({ ...req.body, password: hashedPassword })

    const { password, ...others } = newUser._doc
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '8d' })

    return res.status(201).json({ others, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

authController.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      throw new Error('Wrong Email. Try again!')
    }


    const comparePass = await bcrypt.compare(req.body.password, user.password)
    if (!comparePass) {
      throw new Error('Wrong Password. Try again!')
    }

    const { password, ...others } = user._doc
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8d' })

    return res.status(200).json({ others, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})


module.exports = authController