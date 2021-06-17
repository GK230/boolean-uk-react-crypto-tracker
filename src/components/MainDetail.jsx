import { useEffect, useState } from "react";
import { getPrice } from "../api";

// This function give us the current time in seconds
function getCurrentTime() {
  return Math.round(Date.now() / 1000);
}

/*
  Use this function with the updated_at timestamp you get from each coin item in the API response
 */
function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling dates
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}

export default function MainDetail({ coin }) {
  const { id, symbol, name, current_price, last_updated } = coin
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const [priceOfSelected, setPriceOfSelected] = useState({})

  const updatedTimeAgo = currentTime - convertToSeconds(last_updated)

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(getCurrentTime()), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    getPrice(id).then((new_price) => setPriceOfSelected(new_price));
  }, []);

  console.log(priceOfSelected)


  return (
    <>
      <section className="main-detail__central">
        <div className="main-detail__update">
          {/* <!-- Leave this section in for the challenge --> */}
        </div>
        <div className="main-detail__name">
          <h2>{name}</h2>
          <p>
            <span className="small">a.k.a </span>
            {symbol}
          </p>
        </div>
        <div className="main-detail__price">
          <p>{current_price}</p>
          <p>Updated {updatedTimeAgo} seconds ago</p>
        </div>
      </section>
    </>
  );
}
