import Input from "./Input.jsx"

export default function CryptoList({listData}) {

    const fetched = listData ? true : false;

    const redClass = "text-red-600";
    const greenClass = "text-green-600";

    const mainContent = (
        <>
            <div className="my-3 flex justify-center items-center text-left flex-row gap-20 border-2 border-gray-400 rounded-full p-2">
                <span className="flex-1/12"></span>
                <span className="flex-2/12">Name</span>
                <span className="flex-3/12">Price</span>
                <span className="flex-3/12">Market Cap</span>
                <span className="flex-3/12">Change (24hr)</span>
            </div>
            {listData?.map((item, index) => <div key={index} className="my-3 flex justify-center items-center flex-row gap-20 border-2 border-gray-400 rounded-full p-2">
                <span className="flex-1/12"><img className="w-10 h-10" src={item.image} /></span>
                <span className="flex-2/12">{item.name}</span>
                <span className="flex-3/12">{item.current_price} USD</span>
                <span className="flex-3/12">{(item.market_cap/1000000000).toFixed(2)} B</span>
                <span className={`flex-3/12 ${item.price_change_percentage_24h > 0 ? greenClass : redClass}`}>{(item.price_change_percentage_24h.toFixed(2))} %</span>
            </div>)} 
        </>
    )

    return (
        <div className="bg-gray-950 h-auto w-full py-8 flex flex-col m-auto">
            <div className="w-7/10 mx-auto">
                <Input type="text">
                    Search
                </Input>
            </div>
            <div className="w-7/10 mx-auto text-white my-5">
                {fetched ? mainContent : <div className="border-2 rounded-full p-4 border-white text-center"><span>Fetching Market Data...</span></div>}
            </div>
        </div>
    )
}