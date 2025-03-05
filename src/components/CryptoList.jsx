import Input from "./Input.jsx"

export default function CryptoList() {
    return (
        <div className="bg-gray-950 h-screen w-full py-8 flex flex-col m-auto">
            <div className="w-7/10 mx-auto">
                <Input type="text">
                    Search
                </Input>
            </div>

        </div>
    )
}