import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


const Signup = (props) => {

    const host = 'http://127.0.0.1:5000'
    const [credential, setCredential] = useState({ firstname: "", email: "", password: "" })
    const client_id = 'e16d2adc1b4d4d1ea12fed9db89c4179';
    const client_secret = '1cb042fa23cc4014b3b9ffa279e478f0';

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
            console.log(data)
            //   setAccessToken(data.access_token);
            localStorage.setItem('token', data.access_token);

        } catch (error) {
            console.error('Error fetching Spotify API token:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credential.firstname, email: credential.email, password: credential.password }),
        });

        // return response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //redirect  and save authtoken
            getToken();
            // localStorage.setItem('token', json.authToken);
            navigate('/maindashboard');
            // props.showalert(`${json.message}`, "success");
            console.log(json.message, "success")
        } else {
            if (json.message === undefined) {
                // props.showalert(`Some error occured, Unable to sign up `, 'danger');
                console.log("Some error occured, Unable to sign up")
            } else {
                // props.showalert(`${json.message}`, 'danger');
                console.log(json.message, "danger")
            }
        }




    }

    const onChange = (e) => {

        //Whatever is changing, its value become its name
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div className='bg-[#121212]'>
            <header className='p-8'>
                <span className='text-white'>Spotify</span>
            </header>
            <section className='flex flex-grow justify-center px-8'>
                <div className='sm:w-[324px] w-full h-auto'>
                    <div className='mb-10'>
                        <span className='text-5xl text-white font-semibold'>Sign up to start listening</span>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <label htmlFor="name" className='text-white font-semibold pb-1'>First Name</label>
                        <input onChange={onChange} value={credential.firstname} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="firstname" id="firstname" placeholder='first name' autoComplete='name' />
                        
                        <label htmlFor="email" className='text-white font-semibold pb-1'>Email address</label>
                        <input onChange={onChange} value={credential.email} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="email" name="email" id="email" placeholder='name@domain.com' autoComplete='email' />
                        <span className='py-1'><a href="/" className='underline text-green-500'>Use phone number insted</a></span>
                        
                        <label htmlFor="password" className='text-white font-semibold pb-1'>Password</label>
                        <input onChange={onChange} value={credential.password} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="password" name="password" id="password" placeholder='password' autoComplete='password' />
                        
                        <button type='submit' className='rounded-full bg-green-500 font-semibold w-full p-[14px] my-8'>Create account</button>
                    </form>
                    <div className=''>
                        <div className='text-white text-center'>
                            <span className='px-1'>or</span>
                        </div>
                        <ul className='text-center flex flex-col mx-auto mt-8 indent-0 gap-2'>
                            <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><i className="fa-brands fa-google" /><span className='mx-[30px] font-semibold'>Continue with Google</span></button></li>
                            <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center '><i className="fa-brands fa-facebook" /><span className='mx-[20px] font-semibold'>Continue with Facebook</span></button></li>
                        </ul>
                        <hr className='my-8 border-[1px] border-solid w-full' />
                        <span className='mt-8 text-white text-center'>Already have an account? <Link to="/login" className='text-white underline'>log in here</Link>.</span>
                    </div>
                </div>
            </section>
            <footer className='p-6 text-gray-200 text-center'>
                <span>This site is protected by reCAPTCHA and the Google</span>
            </footer>
        </div>
    )
}

export default Signup