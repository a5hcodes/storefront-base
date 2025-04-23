import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-16 bg-[#f9f4ef]'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col sm:flex-row g-10 items-center'>
          {/* Left side - Image */}
          <motion.div
            className='w-full md:w-1/2'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='relative h-96 w-full'>
              <div className='absolute inset-0 bg-cover bg-center rounded-lg shadow-xl'
                style={{ backgroundImage: "url('src/assets/hero1-mobile.png')" }} />
              <div className='absolute -bottom-6 -right-6 h-32 w-32 bg-red-950 rounded-lg z-10'></div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className='w-full md:w-1/2 mt-10 md:mt-0 px-3 md:px-9'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-red-950 mb-6'>Our <span className='text-red-800'>Story</span></h2>
            <div className='w-20 h-1 bg-red-950 mb-8'></div>


            <motion.p
              className='text-lg text-gray-800 mb-6'
              initial={{ opaacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our tailor has been in this line of work since 1982, with over 40 years of experience in stitching custom men's clothing like kurtas, sherwanis, Jodhpuri suits, shirts, pants, and formal suits. His work is steady, detailed, and built on years of practice.
            </motion.p>

            <motion.p
              className='text-lg text-gray-800 mb-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              He also tailors for women, offering clean cuts and comfortable fits shaped by decades of hands-on skill. Along with tailoring, we also offer a good selection of fabrics—including materials for suiting, shirting, and jeans.
            </motion.p>

            <motion.p
              className='text-lg text-gray-800 mb-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Whether you're here for stitching or just to buy fabric, you'll find quality and honest service. If you're looking for clothes that fit well and feel right, made by someone who truly understands the craft, this is the place for you.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className='bg-red-950 text-white font-medium px-8 py-3 rounded-full hover:bg-red-800 transition-all ease-in-out duration-300 shadow-md'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => {
                  document.getElementById('contact').scrollInView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

export default About;