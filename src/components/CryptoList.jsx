import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import CryptoItem from "./CryptoItem.jsx";

export default function CryptoList({listData, onRefresh}) {

    console.log(listData);

    const [search, setSearch] = useState('');
    const [showList, setShowList] = useState('allCoins');
    const [disable, setDisable] = useState(false);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        setShowList(listData);
        setFetching(false);
    }, [listData])

    const searchChangeHandler = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }

    let newList = listData;

    if (showList === 'allCoins') {
        newList = listData;
    } else if (showList === 'top10Coins') {
        newList = listData.sort((a, b) => b.market_cap - a.market_cap).slice(0, 10);
    } else if (showList === 'trending') {
        newList = listData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 10);
    } else if (showList === 'below1') {
        newList = listData.filter((item) => item.current_price <= 1);
    }

    const selectionChangeHandler = (event) => {
        setShowList(event.target.value);
    }

    let filteredList = newList?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    const mainContent = (
        <>
            <div className="text-xs lg:text-base md:text-base sm:text-base font-bold flex flex-row  text-center  rounded-2xl bg-blue-950 p-2 gap-6 items-center">
                <span className="px-1 flex-1/12">Icon</span>
                <span className="flex-3/12">Name</span>
                <span className="flex-2/12">Price</span>
                <span className="flex-3/12">Market Cap</span>
                <span className="flex-2/12 px-1">Change (24hr)</span>
            </div>
            {filteredList?.map((item, index) => <CryptoItem itemData={item} key={index} />)} 
        </>
    )

    const refreshHandler = async () => {
        setFetching(true);
        setDisable(true);
        setTimeout(() => {
            setDisable(false);
        }, 60000);
        onRefresh();
    }

    return (
        <div className="bg-gray-950 h-auto flex flex-col mx-auto gap-6">
            <div className="w-11/12 lg:w-7/10 md:w-7/10 sm:w-9/10 mx-auto text-white flex flex-col lg:flex-row md:flex-row sm:flex-row gap-3 justify-between">
                <Input onSearch={(event) => searchChangeHandler(event)} type="text">
                    Search
                </Input>
                <span className="flex flex-row justify-between lg:flex-row md:flex-row sm:flex-row gap-3">

                    <select className="cursor-pointer border-1 p-2 text-sm text-left rounded-full" name='selection' onChange={selectionChangeHandler}>
                        <option className="bg-blue-950" value='allCoins'>All coins</option>
                        <option className="bg-blue-950" value='trending'>Trending</option>
                        <option className="bg-blue-950" value='top10Coins'>Top 10 coins</option>
                        <option className="bg-blue-950"  value='below1'>Below 1$</option>
                    </select>

                    <button disabled={disable} onClick={refreshHandler}  className={`text-sm cursor-pointer duration-150 p-2 px-3 border-1 rounded-full hover:bg-blue-950 ${disable ? "opacity-25": null}`}>Refresh</button>
                
                </span>
            </div>
            <div className="w-11/12 lg:w-7/10 md:w-7/10 sm:w-9/10 mx-auto text-white my-5">
                {!fetching ? mainContent : <div className="border-2 rounded-full p-4 border-white text-center"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto animate-spin"></div></div>}
            </div>
        </div>
    )
}