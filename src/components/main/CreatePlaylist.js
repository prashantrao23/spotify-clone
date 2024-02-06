import React, { useState } from 'react'
import axios from 'axios'


const CreatePlaylist = () => {

    const host = 'http://127.0.0.1:5000'
    const [playlist, setPlaylist] = useState({ name: "" })
    const authToken = localStorage.getItem('token')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            url: `${host}/api/playlist/createplaylist`,
            headers: { "Content-Type": "application/json", "auth-token": authToken },
            data: { name: playlist.name },
        };

        console.log(options);
        try {
            const response = await axios.request(options);
            console.log('Playlist created', response.data);
            // if (response.data.success) {
            //     setSongLiked(true)
            // }
        } catch (error) {
            console.error('Error creating playlist ', error.response.data.error);
        }

    }

    const onChange = (e) => {
        //Whatever is changing, its value become its name
        setPlaylist({ ...playlist, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label htmlFor="name" className='text-white font-semibold pb-1'>Playlist Name</label>
                    <input onChange={onChange} value={playlist.firstname} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="name" id="name" placeholder='name' />
                    {/* <span className="error text-red-400">{errors.name}</span> */}

                    <button type='submit' className='rounded-full bg-green-500 font-semibold w-full p-[14px] my-8'>Create playlist</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePlaylist