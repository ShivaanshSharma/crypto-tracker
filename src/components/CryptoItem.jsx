
export default function CryptoItem ({itemData}) {

    const redClass = "text-red-600";
    const greenClass = "text-green-600";

    return (
        <div className=" duration-150 cursor-pointer text-xs text-center lg:text-base md:text-base sm:text-base my-3 flex items-center  flex-row border-2 border-white rounded-full p-2 hover:border-yellow-200 gap-6">
                <span className="flex-1/12"><img className='w-10 h-10 min-w-10  rounded-full' src={itemData.image} /></span>
                <span className="flex-3/12">{itemData.name}</span>
                <span className="flex-2/12">{itemData.current_price.toFixed(2)} USD</span>
                <span className="flex-3/12">{(itemData.market_cap/1000000000).toFixed(2)} B</span>
                <span className={`flex-2/12 ${itemData.price_change_percentage_24h > 0 ? greenClass : redClass}`}>{(itemData.price_change_percentage_24h.toFixed(2))} %</span>
        </div>
    )
}