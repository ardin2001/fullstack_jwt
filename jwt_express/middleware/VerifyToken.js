import jwt from "jsonwebtoken";
 
export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.json({message : 'maaf, silahkan login dahulu'});
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        
        console.log('req email sebelum decode : ',req.email)
        req.email = decoded.email;
        console.log(req.email)
        console.log(decoded)
        req.user_data = decoded
        next();
    })
}