import Value from "./Models/Value.js";
import Money from "./Models/Money.js";
import Snack from "./Models/Snacks.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Snack[]} */
  snacks: [],
  /** @type {Money[]} */
  money: []
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
