const importBusiness = async() =>{
    try{
        res.send({status:200, success:true, msg:'runing'});

    }
    catch (error){
        
        res.send({status:400, success:false, msg:error.message}) 

    }
}

module.exports = {
    importBusiness
}