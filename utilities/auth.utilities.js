const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPass = async (password)=>{
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const comparePass = async(password, hash)=>{
    return await bcrypt.compare(password, hash);
}


const generateToken = (data)=>{
    return jwt.sign({
        data
    },
    process.env.JWT_KEY,
    {
        expiresIn: '8h'
    }
    )
}
const validToken = (token)=>{
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports = {
    hashPass,
    comparePass,
    generateToken,
    validToken
}