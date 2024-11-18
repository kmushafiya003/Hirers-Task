import React from 'react'
import logo from '../assets/Hirers-logo.png'
import { Link } from 'react-router-dom'


const navlinks = [
    {
        id: 1,
        title: "Post Job",
        path: "/post-job",
    },
    {
        id: 2,
        title: "Need Job",
        path: "/need-job",
    },
    {
        id: 3,
        title: "Contact Us",
        path: "/contact-us",
    },
]

const Navbar = () => {
    return (
        <nav className='w-full bg-primary-blue xxl:text-2xl lg:text-xl sm:text-lg text-sm font-abeezee'>

            {/* -------- container ---------- */}

            <div className='w-11/12  mx-auto flex items-center justify-between py-1'>

                {/* ----------- Logo ------------ */}

                <div className='w-[74px] h-[74px]'>

                    <img src={logo} alt="hirers-logo" className='w-full h-full object-cover' />

                </div>


                {/* ---------- navlinks ---------- */}

                <div className=' text-white flex gap-x-20'>

                    {/* --------- links ------- */}

                    <ul className='hidden md:flex items-center gap-x-10 font-normal '>

                        {
                            navlinks.map((item) => (
                                <li className='border-b-2 pb-1 border-primary-blue  transition-all duration-300 hover:border-white'>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>

                    {/* --------- btn --------- */}

                    <div className=''>

                        <button className='bg-white text-secondary-blue py-2 px-3 rounded-xl transition-all duration-300 hover:scale-105'>
                            SignUp/LogIn
                        </button>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar