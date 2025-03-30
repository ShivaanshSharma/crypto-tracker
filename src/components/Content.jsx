
import rocket from '../assets/rocket1.png';
import { motion } from 'motion/react';

export default function Content () {
    return (
        <motion.div 
        initial={{ x: -1000, opacity: 0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ duration: 1}}
        className="flex flex-row w-6/10 mt-18 mx-auto">
            <div className="">
                <span className="text-white content-div text-8xl"><span className="duration-150 cursor-pointer text-yellow-300 hover:text-blue-950">Crypto!</span><br /><span className="text-6xl">to the</span><br />MOON!</span>
            </div>
            <div className="">
                <motion.img 
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
                src={rocket} />
            </div>
        </motion.div>
    )
}