import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
const authUser = asyncHandler(async (req,res) =>{
    // res.status(401);
    // throw new Error('someting went wrong')
     res.status(200).json({message:'Auth user'})
});

const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name,
        email,
        password
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
    // res.status(401);
    // throw new Error('someting went wrong')
    //  res.status(200).json({message:'Register User'})
});

const logoutUser = asyncHandler(async (req,res) =>{
    // res.status(401);
    // throw new Error('someting went wrong')
     res.status(200).json({message:'logout user'})
});

const getUserProfile = asyncHandler(async (req,res) =>{
    // res.status(401);
    // throw new Error('someting went wrong')
     res.status(200).json({message:'User profile'})
});
const updateUserProfile = asyncHandler(async (req,res) =>{
    // res.status(401);
    // throw new Error('someting went wrong')
     res.status(200).json({message:'Update user profile'})
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}