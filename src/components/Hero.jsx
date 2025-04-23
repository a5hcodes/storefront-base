import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id='#'>
            <div className='relative  h-[80vh] md:h-[100vh] w-full'>

                {/* MOBILE ONLY Overlay Color */}
                <div className="absolute inset-0 bg-[#ffe6c4] opacity-80 md:hidden z-10" style={{ filter: "brightness(0.8)" }}></div>
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('src/assets/hero1.png')",
                        filter: "brightness(0.8)"
                    }}
                >
                </div>
                <div className='relative z-10 h-full w-full flex flex-col items-start px-6'>
                    <motion.h1
                        className='text-5xl md:text-7xl lg:text-8xl font-bold text-red-950 mt-15'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className='text-red-950'>Fine</span> <span className='text-red-800'>Tailoring</span>
                    </motion.h1>
                    <motion.p
                        className='text-xl md:text-2xl text-gray-800 max-w-2xl mb-10 mt-5'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Crafting elegant menswear with precision and expertise since 1982.
                    </motion.p>
                    <motion.button
                        className='bg-red-950 text-white font-medium px-8 py-3 rounded-full
                        hover:bg-red-800 hover:text-white transition-all ease-in-out duration-300 shadow-md'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Book a Consultation

                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default Hero;