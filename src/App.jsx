import { useEffect, useState } from "react";

import MainDetail from "./components/MainDetail";
import SideList from "./components/SideList";
import NewsFeedSection from "./components/NewsFeedSection";
import { getCoins, getNews } from "./api";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null);
  const [criptoCoins, setCriptoCoins] = useState([]);
  const [criptoNews, setCriptoNews] = useState([]);

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id;
  }

  useEffect(() => {
    getCoins().then(setCriptoCoins);
  }, []);

  const coin = criptoCoins.find((coin) => coin.id === selectedCripto);

  useEffect(() => {
    getNews().then((news) => setCriptoNews(news["status_updates"]));
  }, []);

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {/* This is where the side list goes */}
        <SideList
          isSelectedCripto={isSelectedCripto}
          selectCripto={setSelectedCripto}
          criptoCoins={criptoCoins}
        />
      </aside>
      <main className="main-detail">
        {selectedCripto ? (
          <MainDetail coin={coin} selectCripto={setSelectedCripto} />
        ) : (
          "Select a coin bro!"
        )}
        {<NewsFeedSection criptoNews={criptoNews} />
}
      </main>
    </>
  );
}

export default App;
