import User from "../../db/models/userSchema.js";
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router=express.Router();
import { checkToken } from "../../middleWare/checkToken.js";

router.post('/signup', async (req,res)=>{
    try{
        const body=req.body
        const user= await User.findOne({email:body.email})
        if(user){
            return res.status(400).json({message:'User with this email already exist'})
        }
        if(body.password!=body.confirmPassword){
            return res.status(400).json({message:'Password doesnot match'})
        }
        const hashedPassword=await bcrypt.hash(body.password,2)
        body.password=hashedPassword;
        const addUser=await User.create(body);
        return res.status(200).json(addUser)
    }catch(e){
    return res.status(500).json(e)
    }
})

router.post('/login',async(req,res)=>{
    try{
        const body =req.body
        const user=await User.findOne({email:body.email})
        if (!user){
            return res.status(403).json({message:"email or password missmatch"})
        }
        const isMatching=await bcrypt.compare(body.password,user.password)
        if (!isMatching){
            return res.status(403).json({message:"email or password missmatch"})
        }

        const token=jwt.sign(
            {id:user._id,role:'USER'},
            'wertyuioplkjhgfdsaazxcvbn',
            {expiresIn:'7d'}
        )
        return res.status(200).json({message:'logged in',token:token})
    }catch(e){
        return res.status(500).json(e)

    }
   
})

router.get('/profile/:id',checkToken(['USER']),async(req,res)=>{
   try{
    const {id}=req.params
    const userProfile=await User.findById(id)
    if(!userProfile){
        return res.status(400).json({message:"User not found"})
    }else{
        res.status(200).json(userProfile)
    }
   }catch(e){
   return  res.status(500).json(e)
   }
})

router.get('/',async(req,res)=>{
    const user=await User.find()
    return res.status(200).json(user)
})

export default router;