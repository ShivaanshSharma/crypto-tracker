import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import CryptoItem from "./CryptoItem.jsx";

export default function CryptoList({listData}) {

    console.log(listData);

    const [search, setSearch] = useState('');
    const [showList, setShowList] = useState();

    useEffect(() => {
        setShowList(listData);
    }, [listData])

    const fetched = listData ? true : false;

    const searchChangeHandler = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }

    const topHandler = () => {
        let newList = listData.sort((a, b) => b.market_cap - a.market_cap).slice(0, 10);
        setShowList(newList);
    }

    const belowHandler = () => {
        let newList = listData.filter((item) => item.current_price <= 1);
        setShowList(newList);
    }

    const trendingHandler = () => {
        let newList = listData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 10);
        setShowList(newList);
    }

    const allCoinsHandler = () => {
        let newList = listData;
        setShowList(newList);
    }

    let filteredList = showList?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    const mainContent = (
        <>
            <div className="flex flex-row border-2 text-center border-white rounded-full p-2">
                <span className="opacity-0">shshs</span>
                <span className="flex-2/6">Name</span>
                <span className="flex-1/6">Price</span>
                <span className="flex-1/6">Market Cap</span>
                <span className="flex-1/6">Change (24hr)</span>
            </div>
            {filteredList?.map((item, index) => <CryptoItem itemData={item} key={index} />)} 
        </>
    )

    return (
        <div className="bg-gray-950 h-auto flex flex-col mx-auto gap-6">
            <div className="w-7/10 mx-auto text-white flex flex-col lg:flex-row md:flex-row sm:flex-row gap-3 justify-between">
                <Input onSearch={(event) => searchChangeHandler(event)} type="text">
                    Search
                </Input>
                <span className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-3">
                    <button onClick={topHandler} className="cursor-pointer duration-150 border-2 rounded-xl p-3 hover:bg-blue-950 hover:text-white">Top 10 coins</button>
                    <button onClick={belowHandler} className="cursor-pointer duration-150 border-2 rounded-xl p-3 hover:bg-blue-950 hover:text-white">Below 1$</button>
                    <button onClick={trendingHandler} className="cursor-pointer duration-150 border-2 rounded-xl p-3 hover:bg-blue-950 hover:text-white">Trending</button>
                    <button onClick={allCoinsHandler} className="cursor-pointer duration-150 border-2 rounded-xl p-3 hover:bg-blue-950 hover:text-white">All coins</button>
                </span>
            </div>
            <div className="w-9/10 lg:w-7/10 md:w-7/10 sm:w-9/10 mx-auto text-white my-5">
                {fetched ? mainContent : <div className="border-2 rounded-full p-4 border-white text-center"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto animate-spin"></div></div>}
            </div>
        </div>
    )
}