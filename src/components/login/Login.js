import React from 'react'

const Login = () => {
    return (
        <div>
            <div className='py-8 pl-[51px]'>
                <div className='text-white font-bold'>Spotify</div>
            </div>
            <div className='py-8 sm:px-8 flex justify-center bg-gradient-to-b from-[#242424]'>
                <div className='bg-black px-2 sm:px-0 sm:max-w-[734px] w-full'>
                    <h1 className='text-white text-4xl text-center font-bold my-12'>Log in to Spotify</h1>
                    <ul className='text-center flex flex-col sm:w-[324px] w-full mx-auto indent-0 gap-2'>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><i class="fa-brands fa-google" /><span className='mx-[30px] font-semibold'>Continue with Google</span></button></li>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center '><i class="fa-brands fa-facebook" /><span className='mx-[20px] font-semibold'>Continue with Facebook</span></button></li>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><i class="fa-brands fa-apple" /><span className='mx-[30px] font-semibold'>Continue with Apple</span></button></li>
                        <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><span className='mx-[10px] font-semibold'>Continue with phone number</span></button></li>
                    </ul>
                    <hr className='my-8 sm:mx-24 border-[1px] border-solid' />
                    <div className='sm:w-[324px] w-full flex flex-col justify-center mx-auto'>
                        <form action="" className='flex flex-col'>
                            <label htmlFor="" className='text-white font-semibold pb-1'>Email or username</label>
                            <input className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="" id="" placeholder='Email or username' />
                            <label htmlFor="" className='text-white font-semibold mt-2 pb-1'>Password</label>
                            <input className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="password" name="" id="" placeholder='Password' />
                            <button className='rounded-full bg-green-500 font-semibold w-full p-[14px] my-8'>Log In</button>
                        </form>
                        <span className='text-white text-center underline'><a href="/">Forgot your Password?</a></span>
                    </div>
                    <hr className='my-8 sm:mx-24 border-[1px] border-solid' />
                    <div className='text-center py-4'>
                        <span className='text-white'>Don't have an account? <a href="/" className='underline'>Sign up for Spotify</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login