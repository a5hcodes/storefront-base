// Importing React library to use JSX and create functional components
import React from 'react';

// Importing 'motion' from Framer Motion for adding animation effects to elements
import { motion } from 'framer-motion';

// Optional icon imports (currently commented out)
// import { GiSewingNeedle, GiTrousers, GiClothes } from 'react-icons/gi';
// import { FaTshirt, FaFabric } from 'react-icons/fa';

// Active import: Customization dashboard icon from Material Design icons
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { section } from 'motion/react-client';

// Define the Services functional component
const Services = () => {

    // Array of service objects, each representing a tailoring service
    const services = [
        {
            id: 1, // Unique identifier for React key prop
            title: "Custom Suits", // Title of the service
            icon: <MdOutlineDashboardCustomize className="w-6 h-6" />, // Icon representing the service
            description: "Tailored suits crafted for your unique measurements and style preferences." // Description of the service
        },
        {
            id: 2,
            title: "Shirts",
            icon: "👕", // Placeholder emoji icon
            description: "Custom-fitted shirts in various fabrics and patterns for any occasion."
        },
        {
            id: 3,
            title: "Pants",
            icon: "👖",
            description: "Perfectly tailored trousers for comfort and style."
        },
        {
            id: 4,
            title: "Ethnic Wear",
            icon: "🧥",
            description: "Traditional kurtas, sherwanis, and Jodhpuri suits for special occasions."
        },
        {
            id: 5,
            title: "Stitching",
            icon: "🧵",
            description: "Expert alteration and stitching services with attention to detail."
        },
        {
            id: 6,
            title: "Fabric Sale",
            icon: "🧶",
            description: "Quality fabrics for suiting, shirting, and special occasions."
        },
        {
            id: 7,
            title: "Denim Material",
            icon: "🔷",
            description: "Premium denim fabrics for custom jeans and jackets."
        }
    ];

    // Animation settings for the parent container - used to stagger child animations
    const containerVariants = {
        hidden: {}, // No styles when hidden
        visible: {
            transition: {
                staggerChildren: 0.2 // Stagger the animation of child items by 0.2s
            }
        }
    };

    // Animation settings for each individual service item
    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below original position
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } // Animate into view with fade and rise
    };

    return (
        <section id="services" className='py-16 bg-white'>
            <div className='container mx-auto px-6'>

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl font-bold text-red-950'>
                        What we <span className='text-red-800'>Offer</span>
                    </h2>
                    <div className='w-24 h-1 bg-red-900 mx-auto my-6' />
                    <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
                        Discover our range of tailoring services and products, crafted with over four decades of expertise.
                    </p>
                </motion.div>
                {/* Grid layout for all services with animation in container*/}
                <motion.div
                    className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className='bg-[#fff8f0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group justify-center items-center'
                            variants={itemVariants}
                        >
                            <div className='w-20 h-20 bg-red-950 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 group  hover:bg-red-800 transition-colors duration-300'>
                                {service.icon}
                            </div>
                            <h3 className='text-xl font-semibold text-red-950 mb-3'>{service.title}</h3>
                            <p className='text-gray-700 '>{service.description}</p>
                        </motion.div>

                    ))}
                </motion.div>

                <motion.div
                    className='text-center mt-12'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button
                        className='bg-red-950 px-8 py-3 font-medium text-white rounded-full hover:bg-red-800 transition-all ease-in-out duration-300 shadow-md'
                        onClick={() => {
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                        }}
                    >Book a Service
                    </button>
                </motion.div>

            </div>
        </section>
    )
}

// // Exporting the Services component so it can be used in other parts of the app
export default Services;
