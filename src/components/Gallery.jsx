import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { button, div } from 'motion/react-client';

const Gallery = () => {
    // Gallery items can be images or videos
    const galleryItems = [
        {
            id: 1,
            type: 'image',
            src: 'src/assets/gallery/suit-finished.jpg',
            alt: 'Custom tailored suit',
            category: 'Finished Pieces'
        },
        {
            id: 2,
            type: 'image',
            src: 'src/assets/gallery/shirt-measurement.jpg',
            alt: 'Taking measurements for a shirt',
            category: 'Process'
        },
        {
            id: 3,
            type: 'video',
            src: 'src/assets/gallery/stitching-process.mp4',
            alt: 'Stitching process',
            poster: 'src/assets/gallery/stitching-thumbnail.jpg',
            category: 'Process'
        },
        {
            id: 4,
            type: 'image',
            src: 'src/assets/gallery/before-after.jpg',
            alt: 'Before and after alteration',
            category: 'Before/After'
        },
        {
            id: 5,
            type: 'image',
            src: 'src/assets/gallery/fabric-selection.jpg',
            alt: 'Fabric selection',
            category: 'Materials'
        },
        {
            id: 6,
            type: 'video',
            src: 'src/assets/gallery/cutting-fabric.mp4',
            alt: 'Cutting fabric',
            poster: 'src/assets/gallery/cutting-thumbnail.jpg',
            category: 'Process'
        },
        {
            id: 7,
            type: 'image',
            src: 'src/assets/gallery/ethnic-wear.jpg',
            alt: 'Finished ethnic wear',
            category: 'Finished Pieces'
        },
        {
            id: 8,
            type: 'image',
            src: 'src/assets/gallery/shop-interior.jpg',
            alt: 'Shop interior',
            category: 'Shop'
        }
    ];

    // Filter categories
    const categories = ['All', 'Finished Pieces', 'Process', 'Before/After', 'Materials', 'Shop'];
    const [activeCategory, setActiveCategory] = useState('All');

    // Filtered items based on selected category
    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    // Animation variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    // Modal state for viewing larger images/videos
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <section id='gallery' className='py-16 bg-[#fff8f0]'>
            <div className='container mx-auto px-6'>
                <motion.div
                    className='text-center mb-12'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-2xl font-bold text-red-950'>Our <span className='text-red-800 text-2xl font-bold'>Gallery</span> </h2>
                    <div className='w-24 h-1 bg-red-950 items-center justify-center mx-auto my-6' />
                    <p>
                        Browse through our craftsmanship and see the quality of our tailoring work.
                    </p>
                </motion.div>

                <motion.div
                    className='flex flex-wrap justify-center gap-3 mb-10'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-red-950 text-white'
                                : 'bg-white text-red-950 hover:bg-red-100'
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))} */}

                    <motion.div
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className='rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 bg-white h-64 relative group'
                                onClick={() => setSelectedItem(item)}
                            >
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        poster={item.poster}
                                        className='w-full h-full object-cover'
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

        </section >
    )
}

export default Gallery;