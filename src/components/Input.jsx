export default function Input({type, children}) {
    return (
        <input className="text-white border-2 py-2 px-3 rounded-full w-2/6 hover:border-gray-400 duration-150" type={type} placeholder={children} />
    )
}