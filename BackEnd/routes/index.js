import express, { Router } from 'express'
import userRoutes from '../routes/userRoutes/index.js'
import departmentRoutes from '../routes/departmentRoutes/index.js'
import labourRoutes from '../routes/labourRoutes/index.js'
import imageRoutes from '../routes/imageRoutes/index.js'
import locationRoutes from '../routes/locationRoutes/index.js'
import bookRoutes from '../routes/bookRoutes/index.js'



const router=express.Router()

router.use('/user',userRoutes)
router.use('/department',departmentRoutes)
router.use('/labour',labourRoutes)
router.use('/image',imageRoutes)
router.use('/location',locationRoutes)
router.use('/book',bookRoutes)


export default router