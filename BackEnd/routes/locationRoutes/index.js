import express from "express"
import Location from "../../db/models/locationSchema.js"

const router=express.Router()


router.post('/',async(req,res)=>{
    const body= req.body
        try {
            const location=await Location.create(body)
            res.status(200).json(location)
        }catch(e){
            res.status(500).json(e)
        }
     })

 router.get('/',async(req,res)=>{
        // const body= req.body
            try {
                const location=await Location.find()
                res.status(200).json(location)
            }catch(e){
                res.status(500).json(e)
            }
         })
    
    
    



export default router;