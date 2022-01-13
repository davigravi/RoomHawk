const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');



const router = express.Router();


router.post("/", asyncHandler(async function (req, res) {
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


router.put("/:id", asyncHandler(async function (req, res) {

    const roomId = req.params.id
    const roomToUpdate = await db.Room.findByPk(roomId);
    console.log("this is room to update", roomToUpdate)


    const { userId,
        newName,
        newDescription,
        newAddress,
        newCity,
        newState,
        newZipcode,
        newNumberRooms,
        newMaxGuest,
        newHasWifi,
        newHasAc,
        newHasFreeParking,
        newPricePerNight,
        newLink } = req.body;

    const updatedRoom = {
        userId,
        newName,
        newDescription,
        newAddress,
        newCity,
        newState,
        newZipcode,
        newNumberRooms,
        newMaxGuest,
        newHasWifi,
        newHasAc,
        newHasFreeParking,
        newPricePerNight,
        newLink
    };


    await roomToUpdate.update(updatedRoom)
   
    return res.json(updatedRoom);
})
);







router.get('/', asyncHandler(async function (req, res) {
    const rooms = await db.Room.findAll();
    return res.json(rooms);
})
);


module.exports = router;
