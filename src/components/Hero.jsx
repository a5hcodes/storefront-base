import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import { div } from 'motion/react-client';

const Hero = () => {
    return (
        <div className='body '>
            <h1 className='	text-red-950 text-center text-9xl'>Hello</h1>
            <button className='bg-[#e6be8a] text-red-950 jusitfy-center hover:bg-red-950 hover:text-white p-2 rounded-lg items-center '> Book a Call</button>
        </div>
    );
};

export default Hero;