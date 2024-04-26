import express from 'express'
import Book from '../../db/models/bookSchema.js'
import { checkToken } from '../../middleWare/checkToken.js'

const router=express.Router()



router.get('/book/:id',checkToken(['LABOUR']),async(req,res)=>{
    try{
        // const body=req.body
    const {id}=req.params
    const book= await Book.find({labour:id}).populate('user')
    return res.status(200).json(book)   
    }catch(e){
        res.status(500).json(e)
    }
})

router.post('/:id',checkToken(['USER']),async(req,res)=>{
    try{
        const body=req.body
        const {id}=req.params
    const book=await Book.create({...body,labour:id})
    return res.status(200).json(book)
    }catch(e){
        res.status(500).json(e)
    }
})

router.delete('/book/:id',checkToken(['LABOUR']),async(req,res)=>{
    try{
        const {id}=req.params
        const book=await Book.findByIdAndDelete(id)
        return res.status(200).json({message:"deleted"})


    }catch(e){
        return res.status(500).json(e)

    }
})


router.post('/accept/:id',async(req,res)=>{
    try{
        const {id}=req.params
        await Book.findByIdAndUpdate({labour:id},{status:"pending"})        
        res.status(200).send("Booking Accepted")
    }catch(e){
        res.status(500).json(e)
    }
})
router.get('/:id',async(req,res)=>{
    // const body=req.body
    const {id}=req.params
    const book= await Book.find({user:id}).populate(['department','labour'])
    return res.status(200).json(book)   
})

router.delete('/:id',checkToken(['USER']),async(req,res)=>{
    const {id}=req.params
    await Book.findByIdAndDelete(id)
    return res.status(500).json({message:"deleted"})
})

router.patch('/accept/:id' ,async(req,res)=>{
    const {id}=req.params
    try{
        await Book.findByIdAndUpdate(id,{status:"Accepted"})
    }catch(e){
        return res.status(500).json(e)
    }
})
router.patch('/reject/:id',async(req,res)=>{
    const{id}=req.params
    try{
        await Book.findByIdAndUpdate(id,{status:"Rejected"})

    }catch(e){

    }
})


export default router;