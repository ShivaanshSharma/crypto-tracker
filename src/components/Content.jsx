
import rocket from '../assets/rocket1.png';

export default function Content () {
    return (
        <div className="flex flex-row w-6/10 mt-18 mx-auto">
            <div className="">
                <span className="text-white content-div text-8xl"><span className="text-yellow-300">Crypto!</span><br /><span className="text-6xl">to the</span><br />MOON!</span>
            </div>
            <div className="">
                <img src={rocket} />
            </div>
        </div>
    )
}