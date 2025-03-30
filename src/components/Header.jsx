
import moon from '../assets/moon4.png';

export default function Header() {
    return (
        <div className=" bg-blue-950 flex flex-row gap-1 items-center justify-center header-div ">
            <img src={moon} className='w-24 h-24'/>
            <span className="text-white text-2xl font-bold duration-150 cursor-pointer hover:text-gray-300">toThe<span>MOON</span></span>
        </div>
    )
}