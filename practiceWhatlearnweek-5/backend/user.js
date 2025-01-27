const jwt=require("jsonwebtoken");
const JWTSecret="12345"
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    const word=token.split(" ");
    jwtToken=word[1];

    try{
        const decodedValue=jwt.verify(jwtToken,JWTSecret);
        if(decodedValue.username){
            next();
        }
        else{
            res.status(403).json({
                msg:"you are not authenticated"
            })
        }
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
    
}

module.exports = {userMiddleware};