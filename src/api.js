import { CRIPTO_LIST } from "./constants";

export function getCoins() {
  return fetch(CRIPTO_LIST).then((resp) => resp.json());
}

export function getCoins() {
    return fetch(CRIPTO_LIST).then((resp) => resp.json());
  }
