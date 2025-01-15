exports.HelloGet=(req,res)=>{
    res.status(200).send('Hello World');
}
exports.HelloPost=(req,res)=>{
    res.status(200).send('I am post Body');
}