import Snacks from "../Models/Snacks.js";
import _store from "../store.js";

class SnacksService {
  buySnack(snackType) {
    let snacks = _store.State.snacks;
    for (let i = 0; i < snacks.length; i++)
      if (
        snacks[i].name == snackType &&
        snacks[i].price <= _store.State.money[0].count &&
        snacks[i].amount > 0
      ) {
        snacks[i].amount--;
        _store.State.money[0].count -= snacks[i].price;
        _store.State.purchasedSnacks.push(snacks[i].name);
        console.log(`${_store.State.purchasedSnacks}`);
      }
  }
}

const SNACKS = new SnacksService();
export default SNACKS;