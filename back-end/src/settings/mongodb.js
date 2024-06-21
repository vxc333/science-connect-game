const mongoose = require("mongoose")
require('dotenv').config()

const username= process.env.DB_USER
const password= process.env.DB_PASSWORD
const cluster= process.env.DB_CLUSTER

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mi8dm4m.mongodb.net/`).then(()=>{
    console.log('Conectado ao MongoDB!')
})
.catch((err)=>{
    console.log(err)
})
