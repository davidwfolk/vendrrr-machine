import Money from "../Models/Money.js";
import _store from "../store.js";

class MoneyService {
  addQuarter() {
    _store.State.money[0].count += 0.25;
  }
}

const MONEY = new MoneyService();

export default MONEY;