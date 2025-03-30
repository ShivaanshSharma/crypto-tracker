import { useState } from "react";
import Input from "./Input.jsx";
import CryptoItem from "./CryptoItem.jsx";

export default function CryptoList({listData}) {

    const [search, setSearch] = useState('');

    const fetched = listData ? true : false;


    const searchChangeHandler = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }

    const filteredList = listData?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    const mainContent = (
        <>
            <div className="my-3 flex justify-center items-center text-left flex-row gap-20 border-2 border-white rounded-full p-2">
                <span className="flex-1/12"></span>
                <span className="flex-3/12">Name</span>
                <span className="flex-3/12">Price</span>
                <span className="flex-2/12">Market Cap</span>
                <span className="flex-3/12">Change (24hr)</span>
            </div>
            {filteredList?.map((item, index) => <CryptoItem itemData={item} key={index} />)} 
        </>
    )

    return (
        <div className="bg-gray-950 h-auto flex flex-col mx-auto">
            <div className="w-7/10 mx-auto">
                <Input onSearch={(event) => searchChangeHandler(event)} type="text">
                    Search
                </Input>
            </div>
            <div className="w-7/10 mx-auto text-white my-5">
                {fetched ? mainContent : <div className="border-2 rounded-full p-4 border-white text-center"><span>Fetching Market Data...</span></div>}
            </div>
        </div>
    )
}