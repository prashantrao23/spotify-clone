import React, { useState } from 'react'

const CreatePlaylist = () => {

    const host = 'http://127.0.0.1:5000'
    const [playlist, setPlaylist] = useState({ name: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${host}/api/playlist/creatplaylsit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: playlist.name }),
        });

        // return response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // navigate('/maindashboard');
            // props.showalert(`${json.message}`, "success");
            console.log(json.message, "Playlist created")
        } else {
            if (json.message === undefined) {
                // props.showalert(`Some error occured, Unable to sign up `, 'danger');
                console.log("Some error occured, Unable to create playlist")
            } else {
                alert(`${json.message}`);
                console.log(json.message, "danger")
            }
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