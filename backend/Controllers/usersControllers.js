const retrieveUser = (req,res)=>{
    res.send('hello Rich')
}

const createUser = (req,res)=>{
    res.send("create user successful")
}

module.exports = { retrieveUser, createUser }       