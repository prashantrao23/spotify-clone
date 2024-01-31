const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Playlist = require('../models/Playlist_model');
const Tracks = require('../models/PlaylistTracks_model');
const fetchuser = require('../middleware/fetchuser');

//Route1: Get all the notes using: GET "/api/note/fetchnallnotes".Login required
router.get('/fetchalltracks', fetchuser, async (req, res) => {

    //fetching notes by user id. We are getting user id through fetchuser
    const track = await Tracks.find({ user: req.user.id });
    res.json(track);


})

//Route2: Add new notes using: POST "/api/note/createnote".Login required
router.post('/addtrack', fetchuser, [
    body('trackID', 'Track ID cannot be empty').notEmpty().escape(),
    body('playlistID', 'Playlist ID cannot be empty').notEmpty().escape(),
], async (req, res) => {

    //destructuring: fetching these details from req.body
    const { trackID, playlistID } = req.body;
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const track = new Tracks({
            trackID, playlistID, user: req.user.id
        })
        const savedtrack = await track.save();
        success = true
        res.json({ success : success, message:'Playlist created successfully', savedtrack: savedtrack });

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

})


//Route4: Delete notes using: Delete "/api/note/deletenote".Login required
router.delete('/deletetrack/:id', fetchuser, async (req, res) => {

    let success = false;

    try {
        //Find the note to be delete and delete it
        // using let instead of const, coz it was throwing error
        let track = await Tracks.findById(req.params.id);
        if (!track) { return res.status(404).send("Not Found") }

        //Allow updation if user own this note
        if (track.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }


        track = await Playlist.findByIdAndDelete(req.params.id)
        success = true;
        res.json({ success : success, message:'Your Track has been deleted', track: track });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }


})

module.exports = router