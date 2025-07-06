import express from "express"
import User from "../utils/User.js"



const router = express.Router()

router.post("/user", (req,res) =>{
  
    const { name } = req.body
    
    if(!name){
        return res.status(400).json({message:" O campo name is origatorio"})
    }
    User.push(name)
    if(name) console.log("foi adicionado com sucesso na variavel +  " +  name)
    return res.status(201).json(
{message:"o Usuario foi adicionado com sucesso", user:name})
})

router.get('/user',(req,res)=>{
    
    return res.status(200).json(User)
})



export default router


