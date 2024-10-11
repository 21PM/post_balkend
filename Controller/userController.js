const userModel = require("../model/userModel")

const postModel = require("../model/PostModel")

const signUp = async(req,res)=>{


    const {email,name,password} = req.body;

    if(!email || !name || !password) {
        return res.status(400).json({
            status:false,
            message:"provide all details up"
        })
    }

    try{
                
        const isAlaredy = await userModel.findOne({email:email});
        console.log(isAlaredy);
        
        if(isAlaredy){
            return res.status(400).json({
                status:false,
                message:"email already registered"
            })
        }

        const saveData = await userModel.create({name,email,password})
        
        if(!saveData){
            return res.status(400).json({
                status:false,
                message:"unable to save data error "
            })
        }

        return res.status(200).json({
            status:true,
            message:"data saved succesfsully"
        })
    }catch(e){
        console.log(e);
        
        return res.status(400).json({
            status:false,
            message:"Sing up",
            error:e
        })
    }

}



const Login = async(req,res)=>{

    const {email,password} = req.body;

   
    if(!email || !password) {
        return res.status(400).json({
            status:false,
            message:"provide all details up"
        })
    }
    try{

        console.log(email);
        

        const isValidUser = await userModel.findOne({email:email});
        console.log(isValidUser);
        
        if(!isValidUser){
            return res.status(400).json({
                status:false,
                message:"invalid User id"
            })
        }

        if(isValidUser.password !== password){
            return res.status(400).json({
                status:false,
                message:"invalid User and password id"
            })
        }
        return res.status(200).json({
            status:true,
            message:"You are loggen in succesfully"
        })

    }catch(e){
        console.log(e);
        
   return res.status(400).json({
        status:false,
        message:"Login up",
        error:e
    })
    }

 
}

const Addpost = async(req,res)=>{

    const {title} = req.body;

    if(!title){
        return res.status(400).json({
            status:false,
            message:"provide all details up"
        })
    }


    try{
        const addPost = await postModel.create({title})

        if(!addPost){
            return res.status(400).json({
                status:false,
                message:"provide all details up"
            })
        }

        return res.status(200).json({
            status:true,
            message:"post added"
        })

    }catch(e){
        console.log(e);
        
        return res.status(400).json({
            status:false,
            message:"provide all details up",
            error:e
        })
        
    }
}

const userController = {
    signUp,
    Login,
    Addpost
}

module.exports = userController