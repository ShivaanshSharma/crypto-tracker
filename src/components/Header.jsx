
import moon from '../assets/logoF.png';

export default function Header() {
    return (
        <div className=" bg-blue-950 flex flex-row gap-3 items-center justify-center header-div p-3">
            <img src={moon} className='w-21 h-21'/>
            <span className="text-white text-2xl font-bold duration-150 cursor-pointer hover:text-yellow-300">to <span className='the text-5xl font-light'>The </span><span>MOON!</span></span>
        </div>
    )
}