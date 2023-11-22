import React from 'react'
import Footer from './Footer'
import Sidenav from './Sidenav'
import RightSection from './RightSection'

const Dashboard = () => {
    return (
        <div className="App  text-white p-2  min-w-[800px] h-auto">
            <div className='flex gap-2 mb-2'>
                <Sidenav/>
                <RightSection/>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard