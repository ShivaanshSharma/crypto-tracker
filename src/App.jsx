import CryptoList from "./components/CryptoList"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [list, setList] = useState(null);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h").then((response) => setList(response.data))
    }, 5000)
  }, [])

 return (
    <>
      <Header />
      <CryptoList listData={list} />
    </>
  )
}

export default App
