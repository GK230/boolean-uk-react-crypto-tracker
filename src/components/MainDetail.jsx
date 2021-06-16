import { useEffect, useState } from "react";
import { getCriptoUpdateUrl } from "../constants";

// This function give us the current time in seconds
function currentTime() {
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

export default function MainDetail({ coin, selectedCripto }) {
  return (
    <>
      <section className="main-detail__central">
        <div className="main-detail__update">
          {/* <!-- Leave this section in for the challenge --> */}
        </div>
        <div className="main-detail__name">
          <h2>{coin.name}</h2>
          <p>
            <span className="small">a.k.a </span>
            {coin.symbol}
          </p>
        </div>
        <div className="main-detail__price">
          <p>{coin.price}</p>
          <p>Updated 1191 seconds ago</p>
        </div>
      </section>
    </>
  );
}
