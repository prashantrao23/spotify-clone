import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {


    const host = 'http://127.0.0.1:5000';

    const [credential, setCredential] = useState({ email: "", password: "" })

    const client_id = 'e16d2adc1b4d4d1ea12fed9db89c4179';
    const client_secret = '1cb042fa23cc4014b3b9ffa279e478f0';

    const {getTokenkey} = props;

    let navigate = useNavigate();

    const getToken = async () => {
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`),
                },
                body: new URLSearchParams({
                    'grant_type': 'client_credentials',
                }),
            });

            const data = await response.json();
            getTokenkey(data.access_token)
            localStorage.setItem('token', data.access_token);
            navigate('/');
        } catch (error) {
            console.error('Error fetching Spotify API token:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credential.email, password: credential.password }),
        });

        const json = await response.json();
        console.log(json);
        if (json.success) {
            await getToken(); // Make sure to wait for token retrieval before navigating.
        } else {
            console.log("Invalid credentials");
        }

    }

    const onChange = (e) => {

        //Whatever is changing, its value become its name
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <div className='py-8 pl-[51px]'>
                <div className='text-white font-bold'>Spotify</div>
            </div>
            <div className='py-8 sm:px-8 flex justify-center bg-gradient-to-b from-[#242424]'>
                <div className='bg-black px-2 sm:px-0 sm:max-w-[734px] w-full'>
                    <h1 className='text-white text-4xl text-center font-bold my-12'>Log in to Spotify</h1>
                    <ul className='text-center flex flex-col sm:w-[324px] w-full mx-auto indent-0 gap-2'>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><i className="fa-brands fa-google" /><span className='mx-[30px] font-semibold'>Continue with Google</span></button></li>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center '><i className="fa-brands fa-facebook" /><span className='mx-[20px] font-semibold'>Continue with Facebook</span></button></li>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><i className="fa-brands fa-apple" /><span className='mx-[30px] font-semibold'>Continue with Apple</span></button></li>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><span className='mx-[10px] font-semibold'>Continue with phone number</span></button></li>
                    </ul>
                    <hr className='my-8 sm:mx-24 border-[1px] border-solid' />
                    <div className='sm:w-[324px] w-full flex flex-col justify-center mx-auto'>
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <label htmlFor="email" className='text-white font-semibold pb-1'>Email or username</label>
                            <input onChange={onChange} value={credential.email} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="email" id="email" placeholder='Email or username' />
                            <label htmlFor="password" className='text-white font-semibold mt-2 pb-1'>Password</label>
                            <input onChange={onChange} value={credential.password} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="password" name="password" id="password" placeholder='Password' />
                            <button type="submit" className='rounded-full bg-green-500 font-semibold w-full p-[14px] my-8'>Log In</button>
                        </form>
                        <span className='text-white text-center underline'><a href="/">Forgot your Password?</a></span>
                    </div>
                    <hr className='my-8 sm:mx-24 border-[1px] border-solid' />
                    <div className='text-center py-4'>
                        <span className='text-white'>Don't have an account? <Link to="/signup" className='underline'>Sign up for Spotify</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login