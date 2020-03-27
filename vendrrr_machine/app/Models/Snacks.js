export default class Snacks {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.amount = data.amount;
  }
  get Template() {
    return /*html*/ `
    <div class="card col-12 col-md-3">
      <div class="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 class="card-title">${this.name}</h5>
        <h5>Quantity: ${this.amount}</h5>
        <button onclick="app.snacksController.buySnack('${this.name}')">Buy ${this.name} - $${this.price}</button>
      </div>
    </div>
    `;
  }
}