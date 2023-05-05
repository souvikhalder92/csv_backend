const mongoose = require('mongoose');
const businessUserSchema = new mongoose.Schema({
    restaurantsName:{
     type:String

    },
    origin:{
        type:String
    },
    location:{
        type:String
    },
    src:{
        type:String
    },
    rating:{
        type:String
    },
    reviews:{
        type:String
    },
    description:{
        type:String
    },
    quickFacts:{
        type:String
    },
    hours:{
        type:String
    }

})
const Business = mongoose.model('Business', businessUserSchema);
module.exports = Business;