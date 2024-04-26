import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/MainProjectDb').then(()=>{
    console.log('Db connected')
}).catch(e=>{
    console.log(e)
})

export default mongoose;