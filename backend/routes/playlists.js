const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router();
// const Note = require('../models/Notes_m');
const Playlist = require('../models/Playlist_model');
const fetchuser = require('../middleware/fetchuser');

//Route1: Get all the notes using: GET "/api/note/fetchnallnotes".Login required
router.get('/fetchallplaylist', fetchuser, async (req, res) => {

    //fetching notes by user id. We are getting user id through fetchuser
    const playlist = await Playlist.find({ user: req.user.id });
    res.json(playlist);


})

router.get('/fetchlikedplaylist', fetchuser, async (req, res) => {

    //fetching playlist by user id. We are getting user id through fetchuser
    const playlist = await Playlist.findOne({ name: "Liked", user: req.user.id });
    res.json(playlist);

})

//Route2: Add new notes using: POST "/api/note/createnote".Login required
router.post('/createplaylist', fetchuser, [
    body('name', 'Title cannot be empty').notEmpty().isLength({ min: 3 }).escape().trim(),
], async (req, res) => {

    //destructuring: fetching these details from req.body
    const { name } = req.body;
    let success = false;
    // console.log(req.body)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }



    try {
        const existingPlaylist = await Playlist.findOne({ name: name });
        if (existingPlaylist) {
            return res.json({ success: success, message: 'Sorry, a playlist with same name already exists' });
        }
        const playlist = new Playlist({
            name, user: req.user.id
        })
        const savedplaylist = await playlist.save();
        success = true
        res.json({ success: success, message: 'Playlist created successfully', savedplaylist: savedplaylist });

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

})

//Route3: update notes using: PUT "/api/note/updatenote".Login required
//In API header we are sending JWT auth token 
router.put('/updateplaylist/:id', fetchuser, async (req, res) => {

    const { title } = req.body;
    let success = false;


    try {
        //create a newNote object
        const newPlaylist = {};
        if (title) { newPlaylist.title = title };

        //Find the note to be updated and update it
        // using let instead of const, coz it was throwing error
        let playlist = await Playlist.findById(req.params.id);
        if (!playlist) { return res.status(404).send("Not Found") }

        //Allow updation if user own this note
        if (playlist.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        //new:true -> if some new content comes then create it
        playlist = await Playlist.findByIdAndUpdate(req.params.id, { $set: newPlaylist }, { new: true })
        success = true;
        res.json({ success: success, message: 'Playlist updated!!!', playlist: playlist });
        // res.json({ note });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }


})


//Route4: Delete notes using: Delete "/api/note/deletenote".Login required
router.delete('/deleteplaylist/:id', fetchuser, async (req, res) => {

    let success = false;

    try {
        //Find the note to be delete and delete it
        // using let instead of const, coz it was throwing error
        let playlist = await Playlist.findById(req.params.id);
        if (!playlist) { return res.status(404).send("Not Found") }

        //Allow updation if user own this note
        if (playlist.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }


        playlist = await Playlist.findByIdAndDelete(req.params.id)
        success = true;
        res.json({ success: success, message: 'Your Playlist has been deleted', playlist: playlist });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }


})

module.exports = router