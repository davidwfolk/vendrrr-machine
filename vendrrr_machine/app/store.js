import Snacks from "./Models/Snacks.js";
import Money from "./Models/Money.js";

let _state = {
  /** @type {Snacks[]} */
  snacks: [
    new Snacks({ name: "Snickers", price: 1, amount: 10 }),
    new Snacks({ name: "Milky Way", price: 2, amount: 5 }),
    new Snacks({ name: "BBQ Chips", price: 3, amount: 12 }),
    new Snacks({ name: "Red Bull", price: 3.5, amount: 8 })
  ],
  /** @type {Money[]} */
  money: [new Money({ count: 0 })],
  /** @type {Snacks[]} */
  purchasedSnacks: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;