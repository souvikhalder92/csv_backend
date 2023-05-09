const mongoose = require('mongoose');
const businessUserSchema = new mongoose.Schema({
    restaurantsName:{
     type:String,
     required:true

    },
    restaurantType:{
        type:String
    },
    location:{
        type:String,
        required:true
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
    businessHours:{
        type:String
    },
    phone:{
        type:String,
        required:true
    },
    halalStatus:{
        type:String
    },
    alcoholStatus:{
        type:String
    },
    costScale:{
        type:String
    },
    paymentSystem:{
        type:String
    },
    availability:{
        type:String
    },
    deliveryOption:{
        type:String
    },
    parkingOption:{
        type:String
    },
    reservationOption:{
        type:String
    },
    cateringOption:{
        type:String
    },
    prayerStatus:{
        type:String
    },
    wifiAvailable:{
        type:String
    },
    organicOption:{
        type:String
    },
    restroomCondition:{
        type:String
    },
    hookahStatus:{
        type:String
    },
    wheelchairAvailable:{
        type:String
    },
    familyFriendly:{
        type:String
    }





},
{
    timestamps:true
})
const Business = mongoose.model('Business', businessUserSchema);
module.exports = Business;