import React from 'react'
import { motion } from 'framer-motion'
// import { GiSewingNeedle, GiTrousers, GiClothes } from 'react-icons/gi';
// import { FaTshirt, FaFabric } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Custom Suits",
            icon: <MdOutlineDashboardCustomize size={36} />, // This would be replaced with an actual icon
            description: "Tailored suits crafted for your unique measurements and style preferences."
        },
        {
            id: 2,
            title: "Shirts",
            icon: "👕", // This would be replaced with an actual icon
            description: "Custom-fitted shirts in various fabrics and patterns for any occasion."
        },
        {
            id: 3,
            title: "Pants",
            icon: "👖", // This would be replaced with an actual icon
            description: "Perfectly tailored trousers for comfort and style."
        },
        {
            id: 4,
            title: "Ethnic Wear",
            icon: "🧥", // This would be replaced with an actual icon
            description: "Traditional kurtas, sherwanis, and Jodhpuri suits for special occasions."
        },
        {
            id: 5,
            title: "Stitching",
            icon: "🧵", // This would be replaced with an actual icon
            description: "Expert alteration and stitching services with attention to detail."
        },
        {
            id: 6,
            title: "Fabric Sale",
            icon: "🧶", // This would be replaced with an actual icon
            description: "Quality fabrics for suiting, shirting, and special occasions."
        },
        {
            id: 7,
            title: "Denim Material",
            icon: "🔷", // This would be replaced with an actual icon
            description: "Premium denim fabrics for custom jeans and jackets."
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-red-950">What We <span className="text-red-800">Offer</span></h2>
                    <div className="w-24 h-1 bg-red-900 mx-auto my-6"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Discover our range of tailoring services and products, crafted with over four decades of expertise.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div 
                            key={service.id}
                            className="bg-[#fff8f0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
                            variants={itemVariants}
                        >
                            <div className="w-20 h-20 bg-red-950 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:bg-red-800 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-red-950 mb-3">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button 
                        className="bg-red-950 text-white font-medium px-8 py-3 rounded-full hover:bg-red-800 transition-all ease-in-out duration-300 shadow-md"
                        onClick={() => {
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Book a Service
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services;