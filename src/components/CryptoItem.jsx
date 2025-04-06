
export default function CryptoItem ({itemData}) {

    const redClass = "text-red-600";
    const greenClass = "text-green-600";

    return (
        <div className="text-xs lg:text-base md:text-base sm:text-base my-3 flex items-center text-center flex-row border-2 border-white rounded-full p-2 hover:border-gray-400 gap-6">
                <span className=""><img className="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full" src={itemData.image} /></span>
                <span className="flex-2/6">{itemData.name}</span>
                <span className="flex-1/6">{itemData.current_price.toFixed(2)} USD</span>
                <span className="flex-1/6">{(itemData.market_cap/1000000000).toFixed(2)} B</span>
                <span className={`flex-1/6 ${itemData.price_change_percentage_24h > 0 ? greenClass : redClass}`}>{(itemData.price_change_percentage_24h.toFixed(2))} %</span>
        </div>
    )
}