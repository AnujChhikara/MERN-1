const User = require("../models/user-model")




const home = async (req,res) =>{
    try { res.status(200).send("Welcome to the home Page using router")
        
    } catch (error) {
        console.log(error)
        
    }
   
 }


 const register = async (req,res, next) =>{
    try {
        const {username , email, phone, password} = req.body

        // checking if user exits

         const userExist = await User.findOne({email: email })

         if(userExist) {
            return res.status(400).json({msg: "email already exits"})
         }

        //  hash the password
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds)
 
        // creating new user
        const userCreation = await User.create({username , email, phone,password})

         res.status(201).send({msg: "Registration Successful",
             token: await userCreation.generateToken(),
            userId : userCreation._id.toString()})
        
    } catch (error) {
      next(err)
      //   res.status(500).send({msg:"Internal server error"})      
    }
 }

 const login = async (req,res) =>{
    try {
        const { email, password} = req.body

         const userExist = await User.findOne({email: email })
          
         if(!userExist) {
            return res.status(400).json({message: "Invalid Credential"})
         }
         
         
         const isPasswordMatch = await userExist.comparePassword(password)
        

         if(isPasswordMatch){
            res.status(200).send({msg: "Login Successful",
             token: await userExist.generateToken(),
            userId : userExist._id.toString()})
         }
        
         else{
            res.status(401).json({message:"Invalid email or password"})
         }
        
    } catch (error) {
        next(error)    
    }
 }


module.exports = {home, register, login}