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

router.get('/fetchlikedtracks/:id', fetchuser, async (req, res) => {

    //fetching liked tracks by user id and playlist id. We are getting user id through fetchuser
    const track = await Tracks.find({ playlist_id: req.params.id, user: req.user.id });
    res.json(track);
    // console.log(track)
})

// router.get('/fetchtracksbyid/:id', fetchuser, async (req, res) => {

//     //fetching liked tracks by user id and playlist id. We are getting user id through fetchuser
//     const track = await Tracks.find({ playlist_id: req.params.id, user: req.user.id });
//     res.json(track);


// })


//Route2: Add new notes using: POST "/api/note/createnote".Login required
router.post('/addtrack', fetchuser, [
    body('track_id', 'Track ID cannot be empty').notEmpty().escape(),
    body('playlist_id', 'Playlist ID cannot be empty').notEmpty().escape(),
], async (req, res) => {

    //destructuring: fetching these details from req.body
    const { track_id, playlist_id } = req.body;
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const existingTrack = await Tracks.findOne({ track_id: track_id, playlist_id: playlist_id });
    if (existingTrack) {
        console.log("Sorry, a track with same id already exists")
        return res.json({ success: success, message: 'Sorry, a track with same id already exists' });
    }
    try {
        const track = new Tracks({
            track_id, playlist_id, user: req.user.id
        })
        const songadded = await track.save();
        success = true
        res.json({ success: success, message: 'Song added successfully', songadded: songadded });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})


//Route4: Delete notes using: Delete "/api/note/deletenote".Login required
router.delete('/deletetrack/:track_id/:playlist_id', fetchuser, async (req, res) => {

    let success = false;
    const { track_id, playlist_id } = req.params;
    // console.log(track_id, playlist_id);

    try {
        //Find the track to be delete and delete it
        // using let instead of const, coz it was throwing error
        let track = await Tracks.findOne({ track_id: track_id, playlist_id: playlist_id });
        if (!track) { return res.status(404).send("Not Found") }

        //Allow updation if user own this track
        if (track.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }


        track = await Tracks.findOneAndDelete({track_id: track_id, playlist_id: playlist_id})
        success = true;
        res.json({ success: success, message: 'Your Track has been deleted', track: track });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

    // try {
    //     // Find and delete the playlist track based on track_id and playlist_id
    //     let playlistTrack = await Tracks.findOneAndDelete({
    //         track_id: req.params.track_id,
    //         playlist_id: req.params.playlist_id,
    //         user: req.user.id // Ensure the user owns the playlist track
    //     });

    //     if (!playlistTrack) {
    //         return res.status(404).send("Playlist track not found");
    //     }

    //     success = true;
    //     res.json({ success: success, message: 'Track has been deleted from the playlist', playlistTrack: playlistTrack });
    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send("Internal server error occurred");
    // }

})

module.exports = router