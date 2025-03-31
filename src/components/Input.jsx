

export default function Input({type, children, onSearch}) {


    return (
        <input onChange={(e) => onSearch(e)} className="text-white border-2 py-2 px-3 rounded-full  hover:border-gray-400 duration-150" type={type} placeholder={children} />
    )
}