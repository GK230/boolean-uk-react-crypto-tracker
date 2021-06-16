import SideListItem from "./SideListItem";

function SideList({ criptoCoins, isSelectedCripto, selectCripto }) {
  return (
    <ul>
      {criptoCoins.map((coin) => {
        const item = { id: coin.id, name: coin.name };
        return (
          <SideListItem
            isSelectedCripto={isSelectedCripto}
            selectCripto={selectCripto}
            item={item}
          />
        );
      })}
    </ul>
  );
}

export default SideList;
