import jwt from  'jsonwebtoken'
// import jwt from 'jsonwebtoken'

export const checkToken=roleArray=>{
return (req,res,next)=>{
    const bToken=req.headers.authorization;
    if(!bToken){
        return res.status(403).json({message:"You are not authorised"})
    }
    // console.log(bToken)
    const token= bToken.split(' ')[1];
    // console.log(token)

try{
    const isValid=jwt.verify(
        token,
        'wertyuioplkjhgfdsaazxcvbn'
    )
    if(!roleArray.includes(isValid.role)){
        return res.status(403).json({message:"You are not authorised"})
    }
    
}catch(e){
    return res.status(403).json({message:"You are not authorised"})

}

    next()
}}