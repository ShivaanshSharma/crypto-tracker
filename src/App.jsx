import CryptoList from "./components/CryptoList"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import Content from "./components/Content"
import Footer from "./components/Footer";

function App() {

  const [list, setList] = useState(undefined);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h');
      const responseData = await response.json();
      setList(responseData);
    }

    fetchData();

  }, [refresh]);

  const refreshHandler = () => {
    setRefresh(prev => !prev);
  }

 return (
    <>
      <Header />
      <Content />
      <CryptoList listData={list} onRefresh={refreshHandler} />
      <Footer />
    </>
  )
}

export default App
