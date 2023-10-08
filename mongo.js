const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanstack')
.then(()=>console.log('connected to mongodb'))
.catch((error)=>console.log('something went wrong',error.message));

const newSchema=new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
})

const collection = mongoose.model('collection', newSchema)

module.exports = collection