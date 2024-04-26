import express from 'express'
import Department from '../../db/models/deparmentSchema.js'
import { checkToken } from '../../middleWare/checkToken.js'


const router=express.Router()

router.get('/',checkToken(['USER']),async(req,res)=>{
    try{
        const departments=await Department.find()
    return res.status(200).json(departments)
    }catch(e){
        res.status(400).json(e)
    }
})

router.post('/',async(req,res)=>{
    try{
        const body=req.body
        const department=await Department.create(body)
        return res.status(200).json(department)
    }catch(e){
      return  res.status(500).json(e)
    }
})

router.delete('/:id',async(req,res)=>{
    console.log('working')
    try{
        const {id}=req.params
        const department=await Department.findByIdAndDelete(id)
        res.status(200).json(department)
    }catch (e) {
        res.status(500).json({message:'Error'})
        
    }
})

export default router;