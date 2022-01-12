const express = require('express')
const asyncHandler = require('express-async-handler');
const { Room, User } = require('../../db/models');



const router = express.Router();


router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { name, description, address, city, state, zipcode,
            numberRooms, maxGuest, hasWifi, hasAc, hasFreeParking, pricePerNight,
             link } = req.body;


        const room = await Room.build({
            userId: res.locals.user.id,
            name,
            description,
            address,
            city,
            state,
            zipcode,
            numberRooms,
            maxGuest,
            hasWifi,
            hasAc,
            hasFreeParking,
            pricePerNight,
            link,
        })

        await room.save();
        res.redirect('/')

    })
);



module.exports = router;
















module.exports = router;
