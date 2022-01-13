const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');



const router = express.Router();


router.post("/", asyncHandler(async function(req, res){
    const newRoom = await db.Room.create(req.body);
    return res.json(newRoom);
})

);

router.delete("/:id", asyncHandler(async function (req, res) {
    const room = await db.Room.findByPk(req.params.id);

    if (!room){
        throw new Error ('Unable to delete spot')
    }

    await room.destroy();
    return res.json(room);
  }));


  router.put("/:id",asyncHandler(async function (req, res) {
      const roomId = parseInt(req.params.id, 10)
      const room = await Room.findOne({
          where: {id: roomId}
      })
      
      const item = await ItemsRepository.updateItem(req.body);
      return res.json(item);
    })
  );







router.get('/', asyncHandler(async function(req, res){
    const rooms = await db.Room.findAll();
    return res.json(rooms);
})
);


module.exports = router;
