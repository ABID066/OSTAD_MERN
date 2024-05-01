module.exports=(req,res,next)=>{

    console.log("auth middleware");
    return res.end("STOP");

    //next();
}