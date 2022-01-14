const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateRoom = [
    check('description')
        .exists({checkFalsy:true})
        .notEmpty()
        .isLength({max:1000})
        .withMessage('Please provide a shorter description')
        .isLength({min:10})
        .withMessage('Please provide a longer description'),
    check('zipcode')
        .exists({checkFalsy:true})
        .notEmpty()
        .isLength({min:5})
        .withMessage('Please provide a 5 digit zipcode')
        .isLength({max:5})
        .withMessage('Please provide a 5 digit zipcode'),
    check('link')
        .exists({checkFalsy:true})
        .notEmpty()
        .isString()
        .withMessage('Please provide a valid url'),
    check('numberRooms')
        .exists({checkFalsy:true})
        .notEmpty()
        .isInt()
        .withMessage('Please provide an Integer'),
    handleValidationErrors,

]




router.post("/",
validateRoom,
 asyncHandler(async function (req, res) {
    const newRoom = await db.Room.create(req.body);
    return res.json(newRoom);
})

);

router.delete("/:id", asyncHandler(async function (req, res) {

    const room = await db.Room.findByPk(req.params.id);

    if (!room) {
        throw new Error('Unable to delete spot')
    }

    await room.destroy();
    return res.json(room);
}));


router.put("/:id",
validateRoom,
 asyncHandler(async function (req, res) {

    const roomId = req.params.id
    const roomToUpdate = await db.Room.findByPk(roomId);
    console.log("this is room to update", roomToUpdate)


    const { userId,
        name:newName,
        description:newDescription,
        address:newAddress,
        city:newCity,
        state:newState,
        zipcode:newZipcode,
        numberRooms:newNumberRooms,
        maxGuest:newMaxGuest,
        // hasWifi:newHasWifi,
        // hasAc:newHasAc,
        // hasFreeParking:newHasFreeParking,
        pricePerNight:newPricePerNight,
        link:newLink } = req.body;

    const updatedRoom = {
        userId,
        name:newName,
        description:newDescription,
        address:newAddress,
        city:newCity,
        state:newState,
        zipcode:newZipcode,
        numberRooms:newNumberRooms,
        maxGuest:newMaxGuest,
        // hasWifi:newHasWifi,
        // hasAc:newHasAc,
        // hasFreeParking:newHasFreeParking,
        pricePerNight:newPricePerNight,
        link:newLink
    };


    await roomToUpdate.update(updatedRoom)
    console.log("updated room ", updatedRoom)
    const list = await db.Room.findAll();
    // list.push(updatedRoom);
    // return res.json(list);
    return res.json(updatedRoom);
})
);







router.get('/', asyncHandler(async function (req, res) {
    const rooms = await db.Room.findAll();
    return res.json(rooms);
})
);


module.exports = router;
