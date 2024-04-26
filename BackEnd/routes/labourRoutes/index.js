import express from 'express'
import Labour from '../../db/models/labourSchema.js'
import { checkToken } from '../../middleWare/checkToken.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const router=express.Router()

router.post('/signup',async(req,res)=>{
    try{
        const body={...req.body}
    const labour=await Labour.findOne({email:body.email})
    if(labour){
        return res.status(400).json({message:"Doctor with this email already exist                                                                                                  "})
    }
    if (body.password!=body.confirmPassword){
        return res.status(400).json({message:'Password missmatch'})
    }

    const hashedPassword=await bcrypt.hash(body.password,2)
    body.password=hashedPassword
    const addLabour=await Labour.create(body)
    return res.status(200).json(addLabour)
    }catch(e){
     return res.status(500).json(e)
    }
})

router.post('/login',async(req,res)=>{
    try{
        const body=req.body
    const labour=await Labour.findOne({email:body.email})
    if(!labour){
        return res.status(400).json({message:"Email or Password doesnot match"})
    }
    
    const isMatching=await bcrypt.compare(body.password,labour.password)
    if(!isMatching){
        return res.status(400).json({message:"Email or Password doesnot match"})
    }

    const token=jwt.sign(
        {id:labour._id,role:'LABOUR'},
        "wertyuioplkjhgfdsaazxcvbn",
        {expiresIn:'7d'}
    )
    return res.status(200).json({message:"logged in",token:token})
    }catch(e){
        return res.status(500).json(e)
    }
})


router.get('/department/:depId',checkToken(['USER']),async(req,res)=>{
   try{
    const{depId}=req.params
    const labour= await Labour.find({department:depId}).populate(['department','place']);
    return res.status(200).json(labour)
   }catch(e){
    return res.status(500).json(e)
   }
})

router.get('/:id',checkToken(['LABOUR']),async(req,res)=>{
    try{
     const{id}=req.params
     const labour= await Labour.findById(id)
     return res.status(200).json(labour)
    }catch(e){
     return res.status(500).json(e)
    }   
 })

 router.get('/',async(req,res)=>{
    try{
    //  const{id}=req.params
     const labour= await Labour.find()
     return res.status(200).json(labour)
    }catch(e){
     return res.status(500).json(e)
    }   
 })

 router.get('/location/:locId',async(req,res)=>{
    const{locId}=req.params
        try {
            const laboures=await Labour.find({location:locId})
            res.status(200).json(laboures)
        }catch(e){
            res.status(500).json(e)
            console.log(e)
        }
     })

router.patch('/edit/:id',checkToken(['LABOUR']),async(req,res)=>{
    const{id}=req.params
    const body={...req.body}
    const labour=await Labour.findByIdAndUpdate(id,body).populate('department')
    res.status(200).json(labour)
})

// router.get('/book/:id',async(req,res)=>{
//     const book=await Labour.findById({book:id})
// })
 

export default router;