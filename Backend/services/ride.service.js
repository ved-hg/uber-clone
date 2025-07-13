const rideModel = require('../models/ride.model');
const mapService = require('./map.service')
const crypto = require('crypto');


 
async function getFare(pickup, destination) {
	if (!pickup || !destination) {
		throw new Error('Pickup and destination are required');
	}
	const distanceTime = await mapService.getDistanceTime(pickup,destination);
    const fareRates = {
        car: 10, // per km
        auto: 5, // per km
        moto: 3  // per km
    };

    const fare = {
    car: (distanceTime.distance.value / 1000) * fareRates.car + (distanceTime.duration.value / 60) * fareRates.car,
    auto: (distanceTime.distance.value / 1000) * fareRates.auto + (distanceTime.duration.value / 60) * fareRates.auto,
    moto: (distanceTime.distance.value / 1000) * fareRates.moto + (distanceTime.duration.value / 60) * fareRates.moto
    };

    return fare;
}

function getotp(num){
    const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, '0');
    return otp;

}


// only required attributes are passed
module.exports.createRide = async (user,pickup,destination,vehicleType) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickup, destination, and vehicle type are required');
    }

    const fare = await getFare(pickup, destination);

    const newRide = new rideModel.create({
        user,
        pickup,
        destination,
        vehicleType,
        otp: getotp(4),
        fare: fare[vehicleType],
        
    });

  

    return newRide;
}

