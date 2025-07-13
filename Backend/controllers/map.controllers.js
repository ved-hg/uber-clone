const mapService = require('../services/map.service')
const {validationResult} = require('express-validator');
module.exports.getCoordinates = async (req,res,next)=>{

const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}



    try {
        const { address } = req.body;
        if (!address) {
            return res.status(400).json({ error: 'Address is required' });
        }

        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json({ coordinates });
    } catch (error) {
       res.status(404).json({message: 'internal server error'});
    }


}
module.exports.getDistanceTime=async(req,res,next)=>{

try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const { origin, destination } = req.body;
    if (!origin || !destination) {
        return res.status(400).json({ error: 'Start location and end location are required' });
    }

    const distanceTime = await mapService.getDistanceTime(origin, destination);
    res.status(200).json({ distanceTime });
}
catch(err){
console.log(err);
res.status.json({message: 'internal server error'})
}

}

module.exports.getAutoSuggestions=async(req,res,next)=>{

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.body;
        if (!input) {
            return res.status(400).json({ error: 'Query is required' });
        }

        const suggestions = await mapService.getAutoSuggestions(input);
        res.status(200).json({ suggestions });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }

}










