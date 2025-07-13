const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rideSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
        },
        captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain'
        },
        pickup: {
        type: String,
        required: true
        },
        destination: {
        type: String,
        required: true
        },
        fare: {
        type: Number,
        required: true
        },
        status: {
            type: String,
            enum: ['pending', 'accepted','ongoing','cancelled', 'completed'],
            default: 'pending'
        },
        duration: {
            type: Number,
        }, //in seconds
        paymentId: {
            type: String,
            ref: 'Payment'
        },
        distance: {
            type: Number,
           }, // in metres
        orderId: {
            type: String,
   },
   signature: {
    type: String,
},


   otp:{
type:String,
select: false,  // to not send to driver
  required:true,

} 
   
});

module.exports = mongoose.model('Ride', rideSchema);