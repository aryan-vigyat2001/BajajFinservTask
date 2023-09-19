exports.getController=async(req,res)=>{
    try{

        return res.status(200).json({operation_code:1,HTTP_STATUS_CODE:200})
    }
    catch(error)
    {
        return res.status(500).json({message:"Server Error"})
    }
}