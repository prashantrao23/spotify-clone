import React from 'react'

const Signup = () => {
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
                    <form action="" className='flex flex-col'>
                        <label htmlFor="" className='text-white font-semibold pb-1'>Email address</label>
                        <input className="rounded-sm bg-[#121212] border-[1px] border-solid p-[14px] text-white" type="text" name="" id="" placeholder='name@domain.com' />
                        <span className='py-1'><a href="/" className='underline text-green-500'>Use phone number insted</a></span>
                        <button className='rounded-full bg-green-500 font-semibold w-full p-[14px] my-8'>Next</button>
                    </form>
                    <div className=''>
                        <div className='text-white text-center'>
                            <span className='px-1'>or</span>
                        </div>
                        <ul className='text-center flex flex-col mx-auto mt-8 indent-0 gap-2'>
                            <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center'><i class="fa-brands fa-google" /><span className='mx-[30px] font-semibold'>Continue with Google</span></button></li>
                            <li className='m-0 p-0 indent-0 '><button className='py-[7px] px-[31px] rounded-full border-[1px] border-solid text-white w-full inline-flex justify-center items-center '><i class="fa-brands fa-facebook" /><span className='mx-[20px] font-semibold'>Continue with Facebook</span></button></li>
                        </ul>
                        <hr className='my-8 border-[1px] border-solid w-full' />
                        <span className='mt-8 text-white text-center'>Already have an account? <a href="/" className='text-white underline'>log in here</a>.</span>
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