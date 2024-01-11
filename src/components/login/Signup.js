import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


const Signup = (props) => {

    const host = 'http://127.0.0.1:5000'
    const [credential, setCredential] = useState({ firstname: "", lastname: "", email: "", password: "", confirm_password:"" })
    const [errors, setErrors] = useState({});
    const client_id = 'e16d2adc1b4d4d1ea12fed9db89c4179';
    const client_secret = '1cb042fa23cc4014b3b9ffa279e478f0';

    let navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};
    
        // Username validation
        if (!credential.firstname.trim()) {
          newErrors.firstname = 'Firstname is required';
        }
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!credential.email.trim() || !emailRegex.test(credential.email)) {
          newErrors.email = 'Invalid email address';
        }
    
        // Password validation
        if (credential.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
    
        // Confirm Password validation
        if (credential.password !== credential.confirm_password) {
          newErrors.confirm_password = 'Passwords do not match';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if there are no errors
      };


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

        const firstPassword = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;

        validateForm();

        // if (confirmPassword !== firstPassword) {
        //     console.log("password and confirm password dosn't match")
        //     alert(`password and confirm password dosn't match`);
        //     return;

        // }

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname: credential.firstname, lastname: credential.lastname, email: credential.email, password: credential.password }),
        });

        // return response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //redirect  and save authtoken
            // getToken();
            // localStorage.setItem('token', json.authToken);
            navigate('/maindashboard');
            // props.showalert(`${json.message}`, "success");
            console.log(json.message, "success")
        } else {
            if (json.message === undefined) {
                // props.showalert(`Some error occured, Unable to sign up `, 'danger');
                console.log("Some error occured, Unable to sign up")
            } else {
                alert(`${json.message}`);
                console.log(json.message, "danger")
            }
        }




    }

    const onChange = (e) => {

        //Whatever is changing, its value become its name
        setCredential({ ...credential, [e.target.name]: e.target.value })

        setErrors((preError)=>({ ...preError, [e.target.name]: "" }));
    }

    return (
        <div className='bg-[#121212] h-screen'>
            <header className='p-8'>
                <span className='text-white'>Spotify</span>
            </header>
            <section className='flex flex-grow justify-center px-8'>
                <div className='sm:w-[324px] w-full h-auto'>
                    <div className='mb-10'>
                        <span className='text-5xl text-white font-semibold'>Sign up to start listening</span>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <label htmlFor="firstname" className='text-white font-semibold pb-1'>First Name</label>
                        <input onChange={onChange} value={credential.firstname} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="firstname" id="firstname" placeholder='first name'  />
                        <span className="error text-red-400">{errors.firstname}</span>

                        <label htmlFor="lastname" className='text-white font-semibold pb-1'>Last Name</label>
                        <input onChange={onChange} value={credential.lastname} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="lastname" id="lastname" placeholder='last name'  />

                        <label htmlFor="email" className='text-white font-semibold pb-1'>Email address</label>
                        <input onChange={onChange} value={credential.email} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="email" name="email" id="email" placeholder='name@domain.com' />
                        <span className="error  text-red-400">{errors.email}</span>


                        <label htmlFor="password" className='text-white font-semibold pb-1'>Password</label>
                        <input onChange={onChange} value={credential.password} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="password" name="password" id="password" placeholder='password'  />
                        <span className="error  text-red-400">{errors.password}</span>

                        <label htmlFor="confirm_password" className='text-white font-semibold pb-1'>Confirm Password</label>
                        <input onChange={onChange} value={credential.confirm_password} className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="password" name="confirm_password" id="confirm_password" placeholder='confirm password'  />
                        <span className="error  text-red-400">{errors.confirm_password}</span>

                        <button type='submit' className='rounded-full bg-green-500 font-semibold w-full p-[14px] my-8'>Create account</button>
                    </form>
                    <div className='py-2'>
                        <hr className='my-4 border-[1px] border-solid w-full' />
                        <span className='mt-4 text-white text-center'>Already have an account? <Link to="/login" className='text-white underline'>log in here</Link>.</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup