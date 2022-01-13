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
    console.log("in backend")
    const rooms = await db.Room.findAll();
    console.log(rooms);
    return res.json(rooms);
})
);


module.exports = router;
