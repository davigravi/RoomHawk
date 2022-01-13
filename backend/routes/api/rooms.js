const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');



const router = express.Router();


router.post("/", asyncHandler(async function(req, res){
    const newRoom = await db.Room.create(req.body);
    return res.json(newRoom);
})

);

// router.delete("/:id", asyncHandler(async function (req, res) {
//     const roomId = parseInt(req.params.id, 10)
//     const room = await db.Room.findByPk(roomId);

//     if (room){
//         await room.destroy();
//     }

//     return res.json(roomId);
//   }));


router.get('/', asyncHandler(async function(req, res){
    const rooms = await db.Room.findAll();
    return res.json(rooms);
})
);


module.exports = router;
