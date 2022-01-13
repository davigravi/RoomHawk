const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');



const router = express.Router();


router.post("/", asyncHandler(async function(req, res){
    const newRoom = await db.Room.create(req.body);
    return res.json(newRoom);
})

);


router.get('/', asyncHandler(async function(req, res){
    const rooms = await db.Room.findAll();
    return res.json(rooms);
})
);


module.exports = router;
