import Input from "./Input.jsx"

export default function CryptoList({listData}) {

    console.log(listData);

    return (
        <div className="bg-gray-950 h-screen w-full py-8 flex flex-col m-auto">
            <div className="w-7/10 mx-auto">
                <Input type="text">
                    Search
                </Input>
            </div>
            <div className="w-7/10 mx-auto text-white text-left my-5">
                {listData?.map((item) => <div className="my-3 flex flex-row gap-20 border-2 border-gray-400 rounded-full p-2">
                    <span className="flex-1/12"><img className="w-8 h-8" src={item.image} /></span>
                    <span className="flex-3/12">{item.name}</span>
                    <span className="flex-2/12">{item.current_price}</span>
                    <span className="flex-4/12">{item.market_cap}</span>
                    <span className="flex-2/12">{item.price_change_percentage_24h}</span>
                </div>)}
            </div>
        </div>
    )
}