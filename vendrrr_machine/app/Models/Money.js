import _store from "../store.js";

export default class Money {
  constructor(data) {
    this.count = data.count;
  }
  get Template() {
    return /*html*/ `
    <div class="col-4 mx-auto text-center">
      <h3>Click here to insert Quarters</h3>
      <img src="https://thumbs.gfycat.com/PowerlessMiserlyIncatern-small.gif" alt="" onclick="app.moneyController.addQuarter()">
      <h5>Current money in vending machine: $${_store.State.money[0].count}</h5>
    </div>
    `;
  }
}