import { CRIPTO_LIST } from "./constants";
import { STATUS_UPDATES } from "./constants";
import { getCriptoUpdateUrl} from "./constants"

export function getCoins() {
  return fetch(CRIPTO_LIST).then((resp) => resp.json());
}

export function getNews() {
  return fetch(STATUS_UPDATES).then((resp) => resp.json());
}

export function getPrice(id) {
    return fetch(getCriptoUpdateUrl(id)).then((resp) => resp.json())
}
