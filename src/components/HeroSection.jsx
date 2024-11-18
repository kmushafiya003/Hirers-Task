import React from 'react'
import employer from '../assets/employer.png'
import jobseeker from '../assets/job seekers.png'
import acw from '../assets/Arrow CW.png'
import cw from '../assets/arrow ACW.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'


const socialIcon = [

    {
        id: 1,
        title: "whatsapp",
        icon: whatsapp,
    },
    {
        id: 2,
        title: "facebook",
        icon: facebook
    },
    {
        id: 3,
        title: "instagram",
        icon: insta
    },
    {
        id: 4,
        title: "linkeIn",
        icon: linkedin
    },

]


const HeroSection = () => {
    return (
        <section className='min-h-[900px] sm:pt-24 xs:pt-16 pt-12 pb-16 bg-center xxxl:bg-cover sm:bg-contain bg-contain bg-no-repeat hero-section relative'>


            {/* ---------- container --------- */}

            <div className='lg:w-10/12 w-11/12 mx-auto  h-full flex flex-col xmd:gap-y-36 sm:gap-y-24 gap-y-16'>


                {/* -------- upper part ------- */}

                <div className='flex flex-col xmd:gap-y-4 gap-y-3 xs:px-0 px-6 shadow-part'>

                    <div className='flex flex-col xmd:gap-y-4 gap-y-2 items-center text-center xxl:text-5xl xmd:text-4xl md:text-3xl xs:text-2xl text-xl font-bold text-secondary-blue tracking-wide drop-shadow-lg'>

                        <h1 className='drop-shadow-lg sm:drop-shadow-none'>
                            Find, Apply, and Secure
                        </h1>

                        <h1 className='drop-shadow-lg sm:drop-shadow-none'>
                            Your Dream Job with Hirers in Just 2 Days!
                        </h1>

                    </div>

                    <p className='xxl:text-[28px] xmd:text-2xl md:text-xl text-lg sm:flex hidden justify-center text-center font-abeezee'>Experience the accelerated journey to your dream career with us.</p>

                    <div className='  flex xmd:hidden gap-x-4 justify-center'>

                        {
                            socialIcon.map((item) => (
                                <div key={item.id} className='xxl:w-14 xmd:w-10 w-9 h-9 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer'>
                                    <img src={item.icon} alt={item.title} className='w-full h-full object-cover rounded-full' />
                                </div>
                            ))
                        }

                    </div>


                </div>

                {/* --------- bottom part ---------- */}

                <div className='flex xmd:flex-row flex-col-reverse justify-center items-center xxl:gap-x-36 gap-y-24 lg:gap-x-32 gap-x-24 '>

                    {/* --------- employers ------ */}


                    <div className='flex flex-col sm:gap-y-8 gap-y-4'>

                        <div className='xxl:w-[380px] sm:w-[350px] w-[280px] xxl:h-[330px] sm:h-[280px] h-[260px] bg-secondary-blue rounded-2xl bg-opacity-15 relative'>

                            <div className='xxl:pl-40 pl-32 pr-3 py-4 flex flex-col sm:gap-y-4 gap-y-2'>

                                <h2 className='xmd:text-2xl sm:text-xl text-lg font-bold text-secondary-blue'>
                                    For Employers
                                </h2>
                                <p className='xxl:text-[22px] md:text-xl sm:text-lg text-base leading-7 font-semibold text-light-black'>
                                    Hire from a large pool of filtered candidates!!
                                </p>

                            </div>

                            {/* -------- employer img ------ */}
                            <div className='absolute sm:left-[-150px] left-[-80px] xxl:top-[-90px] sm:top-[-50px] top-[-10px] '>

                                <img src={employer} alt="employers" className='xxl:w-[400px] sm:w-[300px] w-[220px]' />

                            </div>

                            {/* -------- arrow img ----- */}

                            <div className='absolute xmd:right-[30px] right-[40px] sm:top-[180px] top-[160px] xmd:rotate-[220deg] rotate-[240deg] '>

                                <img src={acw} alt="arrow" className='xxl:w-[100px] sm:w-[80px] w-[60px]' />

                            </div>

                        </div>


                        <div className='flex justify-center'>
                            <button className='py-3 lg:px-8 px-6 bg-secondary-blue text-white rounded-2xl lg:text-2xl sm:text-xl transition-all duration-300 hover:scale-105 text-lg'>
                                Post Job
                            </button>
                        </div>

                    </div>



                    {/* -------- jobseekers ---------- */}


                    <div className='flex flex-col sm:gap-y-8 gap-y-4'>

                        <div className='xxl:w-[380px] sm:w-[350px] w-[280px] xxl:h-[330px] sm:h-[280px] h-[260px] bg-secondary-blue rounded-2xl bg-opacity-15 relative'>

                            <div className='xxl:pr-44 sm:pr-32 pr-28 pl-4 py-4 flex flex-col sm:gap-y-4 gap-y-2'>

                                <h2 className='xmd:text-2xl sm:text-xl text-lg font-bold text-secondary-blue'>
                                    For JobSeekers
                                </h2>
                                <p className='xxl:text-[22px] md:text-xl sm:text-lg text-base leading-7 font-semibold text-light-black'>

                                    Get 100% verified
                                    Jobs at no <br></br>
                                    cost!!
                                </p>

                            </div>

                            {/* -------- jobseeker -------- */}

                            <div className='absolute xxl:right-[-150px] sm:right-[-120px] right-[-60px] xxl:top-[-90px] sm:top-[-50px] top-[-10px] '>

                                <img src={jobseeker} alt="jobseeker" className='xxl:w-[400px] sm:w-[300px] w-[220px]' />

                            </div>

                            {/* -------- arrow img ----- */}

                            <div className='absolute left-[30px] sm:top-[180px] top-[160px] xmd:rotate-[130deg] rotate-[100deg]'>

                                <img src={cw} alt="arrow" className='xxl:w-[100px] sm:w-[80px] w-[60px]' />

                            </div>

                        </div>


                        <div className='flex justify-center'>
                            <button className='py-3 lg:px-8 px-6 bg-secondary-blue text-white rounded-2xl lg:text-2xl sm:text-xl text-lg transition-all duration-300 hover:scale-105'>
                                Search Job
                            </button>
                        </div>

                    </div>


                </div>


            </div>


            {/* -------- side social icons -------- */}

            <div className='w-max  xmd:flex hidden flex-col xl:gap-y-6 gap-y-4 absolute xlg:top-[30%] lg:top-[20%] top-[15%] xxl:right-16 xl:right-10 xlg;xlg:right-8 right-6'>

                {
                    socialIcon.map((item) => (
                        <div key={item.id} className='xxl:w-14 w-10 transition-all duration-300 hover:scale-105 cursor-pointer'>
                            <img src={item.icon} alt={item.title} className='w-full h-full object-cover' />
                        </div>
                    ))
                }

            </div>



        </section>
    )
}

export default HeroSection