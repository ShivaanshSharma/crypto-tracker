
import rocket from '../assets/rocket1.png';
import { motion } from 'motion/react';

export default function Content () {
    return (
        <motion.div 
        initial={{ x: -1000, opacity: 0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ duration: 1}}
        className="flex flex-col lg:flex-row sm:flex-col md:flex-col w-8/10 lg:w-6/10 sm:w-6/10 md:w-6/10 mt-18 mb-9 mx-auto">
            <div>
                <span className="lg:text-8xl sm:text-8xl md:text-8xl text-white content-div text-7xl"><span className="duration-150 cursor-pointer text-yellow-300 hover:text-blue-950">Crypto!</span><br /><span className="text-5xl lg:text-6xl md:text-6xl sm:text-6xl">to the</span><br />MOON!</span>
            </div>
            <div>
                <motion.img 
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
                src={rocket} 
                className='min-w-2xs min-h-2xs'
                />
            </div>
        </motion.div>
    )
}