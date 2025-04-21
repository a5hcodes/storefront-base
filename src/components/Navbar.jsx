import { motion } from 'framer-motion'
import { svg } from 'motion/react-client';
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: '#' },
        { name: "About", link: '#about' },
        { name: "Services", link: '#services' },
        { name: "Gallery", link: '#gallery' },
        { name: "Values", link: '#values' },
        { name: "Testimonials", link: '#testimonials' },
        { name: "Contact", link: '#contact' }

    ];

    return (
        <motion.nav
            className='sticky top-0 z-50 bg-white shadow-sm px-6 py-4'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <motion.h1
                        className='text-lg md:text-2xl font-bold text-red-950'
                        whileHover={{ scale: 1.01 }}
                    >
                        Ashok Men's Wear
                    </motion.h1>
                    <div className='hidden md:flex'>
                        <ul className='flex items-center space-x-1 px-4 py-2 rounded-full'>
                            {navItems.map((items, i) => (
                                <motion.li key={i} whileHover={{ scale: 1.03 }}>
                                    <a
                                        href={items.link}
                                        className='px-3 py-2 text-red-950 hover:bg-[#f9f4ef] hover:rounded-full' >
                                        {items.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu button - only visible on small screens */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='text-red-950 focus:outline-none'
                        >
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                {isMenuOpen ? (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu dropdown */}
                {isMenuOpen && (
                    <motion.div
                        className='md:hidden mt-4'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className='flex flex-col space-y-2 p-4 text-center'>
                            {navItems.map((items, i) => (
                                <li key={i} className='  px-2'>
                                    <a
                                        href={items.link}
                                        className='block px-3 py-2 hover:bg-[#f9f4ef] rounded-md text-red-950 transition duration-300 '
                                        onClick={() => setIsMenuOpen(false)}>
                                        {items.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}

export default Navbar;