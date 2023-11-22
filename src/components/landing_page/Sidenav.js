import React from 'react'

const Sidenav = () => {
    return (
        <nav className='left-section flex flex-col gap-y-2 max-w-[420px] min-w-[300px] w-[100%] '>
            <div className='bg-[#121212] rounded-md text-[17px]'>
                <div className='mt-5 mb-1 mx-0 py-0 px-6'><span><i className="fa-brands fa-spotify text-[24px]" /></span> <span>Spotify</span></div>
                <ul className='py-2 px-3 flex flex-col gap-2'>
                    <li className='py-1 px-3'><a href='/' className='flex gap-5 '><span><i className="fa-solid fa-house text-[24px]" /></span><span>Home</span></a></li>
                    <li className='py-1 px-3'><a href='/' className='flex gap-5 '><span><i className="fa-solid fa-magnifying-glass text-[24px]" /></span><span>Search</span></a></li>
                </ul>
            </div>

            <div className='library bg-[#121212] rounded-md'>
                <div className='py-2 px-4 flex flex-row gap-2 items-center'>
                    <button className='py-1 px-2 me-auto'><span><i className="fa-solid fa-book text-[24px]" /></span><span className='ml-2'>Your Library</span></button>
                    <span className='block'><button className='p-2'><i className="fa-solid fa-plus" /></button></span>
                </div>
                <div className='flex flex-col gap-2 px-2'>
                    <section className='bg-[#242424] rounded-md my-2 py-4 px-5 flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-base font-medium '>Create your first playlist</p>
                            <p className='text-sm font-medium'>It's easy, we'll help you</p>
                        </div>
                        <div>
                            <button className='rounded-full bg-slate-50 text-black text-sm font-semibold py-1 px-4'>Create playlist</button>
                        </div>
                    </section>
                    <section className='bg-[#242424] rounded-md my-2 py-4 px-5 flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-base font-medium '>Let's find some podcast to follow</p>
                            <p className='text-sm font-medium'>We'll keep you updated on new episodes</p>
                        </div>
                        <div>
                            <button className='rounded-full bg-slate-50 text-black text-sm font-semibold py-1 px-4'>Browse podcasts</button>
                        </div>
                    </section>
                    <section className='h-[136px]'></section>
                </div>

                <div>
                    <div className='my-8 px-6'>
                        <a href='/' className='text-xs'>Cookies</a>
                    </div>
                    <div className='px-6 mb-7'>
                        <button className='rounded-full text-sm font-semibold border-solid border-[1px] border-white-500 py-1 px-4'><i className="fa-solid fa-globe" /> English</button>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Sidenav